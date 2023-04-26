const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const SERVER_URL = process.env.SERVER_URL || 'http://127.0.0.1:8080';

describe('Note API', () => {
  let noteId;

  test('should create a new note', async () => {
    const response = await axios.post(`${SERVER_URL}/notes`, {
      title: 'Test note',
      content: 'This is a test note'
    });
    expect(response.status).toBe(201);
    expect(response.data.title).toBe('Test note');
    expect(response.data.content).toBe('This is a test note');
    noteId = response.data.id;
  });

  test('should get a list of notes', async () => {
    const response = await axios.get(`${SERVER_URL}/notes`);
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('should get a single note', async () => {
    const response = await axios.get(`${SERVER_URL}/notes/${noteId}`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(noteId);
  });

  test('should update a note', async () => {
    const response = await axios.put(`${SERVER_URL}/notes/${noteId}`, {
      title: 'Updated note',
      content: 'This note has been updated'
    });
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('Updated note');
    expect(response.data.content).toBe('This note has been updated');
  });

  test('should delete a note', async () => {
    const response = await axios.delete(`${SERVER_URL}/notes/${noteId}`);
    expect(response.status).toBe(204);
    const getResponse = await axios.get(`${SERVER_URL}/notes/${noteId}`);
    expect(getResponse.status).toBe(404);
  });
});