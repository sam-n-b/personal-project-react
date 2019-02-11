
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', (table)=> {
        table.increments('movieId').primary()
        table.string('title')
        table.string('image')
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('movies')
  };
  