const db = require('../data/dbConfig.js');

const insert = async word => {
	const [id] = await db('swear').insert(word);
	return db('swear')
		.where({ id })
		.first();
};

const retrieve = () => {
	return db('swear');
};

const update = async (id, word) => {
	await db('swear')
		.where({ id })
		.update(word);
	return db('swear')
		.where({ id })
		.first();
};

const remove = id => {
	return null;
};

const retrieveById = id => {
	return null;
};

module.exports = {
	insert,
	retrieve,
	update,
	remove,
	retrieveById,
};
