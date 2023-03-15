var http = require('http');
var querystring = require('querystring');
var serveStatic = require('serve-static');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('notes.sqlite');
// Added a better equiped libary for the user inputs
var sanitizeHtml = require('sanitize-html');

// Added more variables i forgot to implement
var path = require('path');
var publicPath = path.join(__dirname, 'public');


// Serve up public folder 
var servePublic = serveStatic('public', {
  'index': false
});

//Added small bug fixes mainly due to the libary issues
function renderNotes(req, res) {
    db.all("SELECT rowid AS id, text FROM notes", function(err, rows) {
        if (err) {
            res.end('<h1>Error: ' + err + '</h1>');
            return;
        }
        res.write('<link rel="stylesheet" href="style.css">' +
                  '<h1>AAF Notebook</h1>' +
                  '<form method="POST">' +
                  '<label>Note: <input name="note" value=""></label>' +
                  '<button>Add</button>' +
                  '</form>');
        res.write('<ul class="notes">');
        rows.forEach(function (row) {
            //Sanitize user input with sanitize-html library
            var sanitizedText = sanitizeHtml(row.text, {allowedTags: []});
            //Gives each note a unique ID called noteID
            res.write('<li id="'+ sanitizedText + '">' + sanitizedText +
            '<button class="delBtn" onclick="location.href = \'/delete?id=' + row.id + '\'">Delete</button>' + '</li>');
        });
        res.end('</ul>');
    });
}

//This function connects the delete button to the database
function deleteNote(id, req, res) {
    //Added the user input validation
    var id = parseInt(id);
    if(isNaN(id)){
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.end('<h1>Error: Invalid input</h1>');
    }
    //Added paramiters using placeholders instead
    db.run('DELETE FROM notes WHERE rowid = ?', [id], function (err) {
        if (err) {
            console.error(err);
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('<h1>Error: ' + err + '</h1>');
        } else {
            res.writeHead(302, {Location: '/'});
            res.end();
        }
    });
}

var server = http.createServer(function (req, res) {
    //requests access to the server for the deletefunction +  error handling
    if(req.url.startsWith('/delete')) {
        var id = req.url.split("=")[1];
        if (!id) {
            //Added error handling 
            res.writeHead(400, {'Content-Type': 'text/html'});
            res.end('<h1>Error: Invalid delete request</h1>');
            return;
        }
        deleteNote(id, req, res);
    } else {
        //Added more validation to prevent file inclusion by making sure user requests are only in the public folder
        var requestedFile = path.normalize(path.join(publicPath, req.url));
        if (requestedFile.indexOf(publicPath) !== 0) {
            res.writeHead(403, {'Content-Type': 'text/html'});
            res.end('<h1>Forbidden</h1>');
            return;
        }
        //bug fixed by reordering the GET and POST requests + adding more error handling
        servePublic(req, res, function () {
            if (req.method == 'GET') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                renderNotes(req, res);
            } else if (req.method == 'POST') {
                var body = '';
                req.on('data', function (data) {
                    body += data;
                });
                req.on('end', function () {
                    var form = querystring.parse(body);
                  //fixed the bug in the database input to acomidate changes i made
                    db.run(`INSERT INTO notes (text) VALUES (?)`, [form.note], function (err) {
                        if (err) {
                            console.error(err);
                            res.writeHead(500, {'Content-Type': 'text/html'});
                            res.end('<h1>Error: ' + err + '</h1>');
                        } else {
                            res.writeHead(302, {Location: '/'});
                            res.end();
                        }
                    });
                });
            }
        });
    }
});


// initialize database and start the server
db.on('open', function () {
    db.run("CREATE TABLE notes (text TEXT)", function (err) {
        console.log('Server running at http://127.0.0.1:8080/');
        server.listen(8080);
    });
});
