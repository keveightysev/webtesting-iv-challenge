const express = require('express');

const words = require('./words/route.js');

const server = express();

server.use(express.json());

server.use('/api/words', words);

server.get('/', (req, res) => {
	res.status(200).send(`
        <h1>This is my server</h1>
        <h2>There are others like it but this one is mine</h2>
    `);
});

module.exports = server;
