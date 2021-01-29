const request = require('supertest');
const app = require('../index')

describe('Test product endpoint', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toEqual(200);
    })
})
