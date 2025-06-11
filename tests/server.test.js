const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});

afterAll(async () => {
  // Close database connection if needed
  const { mc } = require('../database');
  await mc.end();
});