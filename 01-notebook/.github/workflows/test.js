import { strictEqual } from 'assert';
import { post, get } from 'axios';

const SERVER_URL = process.env.SERVER_URL || 'http://127.0.0.1:8080/';

// describe a group of tests related to the note taking application functionality
describe('Note taking application functionality', () => {

  // new note can be added
  it('should add a new note', async () => {
    // send a POST request 
    const response = await post(SERVER_URL, { note: 'Test note' });
    strictEqual(response.status, 302, 'Expected status code of 302'); 
    // send a GET request 
    const getResponse = await get(SERVER_URL);
    strictEqual(getResponse.status, 200, 'Expected status code of 200'); // expect successful get request
    strictEqual(getResponse.data.includes('Test note'), true, 'Expected new note to be in the response'); // expect new note to be in the response
  });

  // a note can be deleted
  it('should delete a note', async () => {
    // send a GET request 
    const getResponse = await get(SERVER_URL);
    const noteId = getResponse.data.match(/id="(.+?)"/)[1];
    // send a GET request 
    const deleteResponse = await get(`${SERVER_URL}/delete?id=${noteId}`);
    strictEqual(deleteResponse.status, 302, 'Expected status code of 302'); 
    // send a GET request 
    const afterDeleteResponse = await get(SERVER_URL);
    strictEqual(afterDeleteResponse.status, 200, 'Expected status code of 200'); // expect successful get request
    strictEqual(afterDeleteResponse.data.includes('Test note'), false, 'Expected deleted note to be removed from response'); // expect deleted note to be removed from response
  });

});