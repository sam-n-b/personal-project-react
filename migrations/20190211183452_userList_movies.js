
exports.up = function(knex, Promise) {
    return knex.schema.createTable('userList_movies', (table)=>{
        table.increments('id').primary()
        table.integer('userId')
        table.integer('movieId')
        table.integer('rating')
        table.string('review')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('userList_movies')
  };
  