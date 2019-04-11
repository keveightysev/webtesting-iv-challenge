const router = require('express').Router();

const Words = require('./model.js');

router.post('/', async (req, res) => {
	try {
		const word = await Words.insert(req.body);
		res.status(201).json(word);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Server error creating word' });
	}
});

router.get('/', async (req, res) => {
	try {
		const words = await Words.retrieve();
		res.status(200).json(words);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Server error retrieving words' });
	}
});

module.exports = router;
