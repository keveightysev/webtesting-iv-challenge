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
	const count = await db('swear')
		.where({ id })
		.update(word);
	if (count > 0) {
		return db('swear')
			.where({ id })
			.first();
	}
	return null;
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
