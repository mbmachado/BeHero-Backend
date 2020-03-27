
exports.up = function(knex) {
    return knex.schema.createTable('incidents', table => {
        table.increments('id').primary();
        table.string('title', 191).notNullable();
        table.string('description', 191).notNullable();
        table.decimal('value').notNullable();
        table.string('ong_id').notNullable();

        table.foreign('ong_id')
            .references('id')
            .inTable('ongs')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};