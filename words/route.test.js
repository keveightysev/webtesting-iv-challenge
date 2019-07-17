const request = require('supertest');

const db = require('../data/dbConfig.js');

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

		it('should respond with JSON', async () => {
			const res = await request(server)
				.post('/api/words')
				.send({ word: 'shit' });
			expect(res.type).toBe('application/json');
		});

		it('should respond with word information', async () => {
			const res = await request(server)
				.post('/api/words')
				.send({ word: 'damn' });
			expect(res.body.word).toEqual('damn');
		});
	});

	describe('GET /api/words', () => {
		it('should respond with 200 OK', async () => {
			const res = await request(server).get('/api/words');
			expect(res.status).toBe(200);
		});

		it('should return JSON', async () => {
			const res = await request(server).get('/api/words');
			expect(res.type).toBe('application/json');
		});
	});
});
