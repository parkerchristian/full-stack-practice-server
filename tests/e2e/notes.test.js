require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');

const createNote = note => {
  return request(app)
    .post('/api/v1/notes')
    .send(note)
    .then(res => res.body);
};

describe('NOTE ROUTES TESTS', () => {
  beforeAll(() => {
    return connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  afterAll(() => {
    return mongoose.connection.close();
  });

  it('POST a Note', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({ title: 'note title', body: 'body of note' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'note title',
          body: 'body of note',
          __v: 0
        });
      });
  });

  it('GET a list of notes', async() => {
    const notes = await Promise.all([
      createNote({ title: 'title', body: 'body' }),
      createNote({ title: 'title', body: 'body' })
    ]);
    return request(app)
      .get('/api/v1/notes')
      .then(res => {
        expect(res.body).toEqual(notes);
      });
  });


});
