const request = require('supertest');

const server = require('../server.js');

describe('Words router', () => {
	beforeEach(async () => {
		await db('swear').truncate();
	});

	describe('POST /api/words', () => {
		it('should respond with 201 CREATED', async () => {
			const res = await request(server)
				.post('/api/words')
				.send({ word: 'fuck' });
			expect(res.status).toBe(201);
		});
	});
});
