
exports.up = function(knex, Promise) {
    return knex.schema.createTable('userList', (table)=> {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('username')
    })
};

exports.down = function(knex, Promise){
  return  knex.schema.dropTable('userList')
};
