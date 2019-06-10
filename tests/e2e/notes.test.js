require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');

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


});
