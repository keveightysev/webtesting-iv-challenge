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

module.exports = router;
