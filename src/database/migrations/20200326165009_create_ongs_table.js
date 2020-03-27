
exports.up = function(knex) {
    return knex.schema.createTable('ongs', table => {
        table.string('id').primary();
        table.string('name', 191).notNullable();
        table.string('email', 191).notNullable().unique();
        table.string('phone', 191).notNullable();
        table.string('city', 191).notNullable();
        table.string('state', 2).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
