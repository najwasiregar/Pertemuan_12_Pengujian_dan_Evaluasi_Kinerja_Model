const request = require('supertest');
const app = require('../server');

describe('Item API', () => {
    it('should retrieve all items', async () => {
        const res = await request(app).get('/api/v1/items');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    // More tests for POST, PUT, DELETE...
});
