#!/bin/bash

# Connect to the database
sqlite3 notes.sqlite << EOF

# Insert a new note into the notes table
INSERT INTO notes (text) VALUES ('Injected!');

EOF
