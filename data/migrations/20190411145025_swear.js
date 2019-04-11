exports.up = function(knex) {
	return knex.schema.createTable('swear', table => {
		table.increments();
		table.string('word');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('swear');
};
