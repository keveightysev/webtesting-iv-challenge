const db = require('../data/dbConfig.js');
const Words = require('./model.js');

describe('words model', () => {
	beforeEach(async () => {
		await db('swear').truncate();
	});

	describe('insert()', () => {
		it('should insert the new word', async () => {
			await Words.insert({ word: 'fuck' });
			const words = await db('swear');
			expect(words).toHaveLength(1);
		});

		it('should return the new word', async () => {
			let word = await Words.insert({ word: 'shit' });
			expect(word.word).toBe('shit');

			word = await Words.insert({ word: 'damn' });
			expect(word.word).toBe('damn');
		});
	});

	describe('retrieve()', () => {
		it('should return list of all words', async () => {
			await Words.insert({ word: 'shit' });
			await Words.insert({ word: 'fuck' });
			await Words.insert({ word: 'damn' });
			const words = await Words.retrieve();
			expect(words.length).toBe(3);
		});
	});

	describe('updated()', () => {
		it('should update the word', async () => {
			await Words.insert({ word: 'shit' });
			await Words.update(1, { word: 'fuck' });

			const words = await db('swear');

			expect(words[0].word).toBe('fuck');
		});

		it('should return the updated record', async () => {
			await Words.insert({ word: 'shit' });
			const word = await Words.update(1, { word: 'damn' });
			expect(word.word).toBe('damn');
		});
	});
});
