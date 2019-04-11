const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
	it('should respond with 200 OK', async () => {
		const res = await request(server).get('/');
		expect(res.status).toBe(200);
	});

	it('should render html', async () => {
		const res = await request(server).get('/');
		expect(res.type).toBe('text/html');
	});
});
