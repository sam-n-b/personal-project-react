exports.seed = function (knex, Promise) {
  return knex('userList').del()
      .then(function (){
          return knex('userList').insert([
              {id: 001, name:'Ray Ray', email: 'yaya@yaya.com', username: 'borg'},
              {id: 002, name: 'Rhonda', email: 'tina@yaya.com', username: 'makaka'},
              {id: 003, name:'Maria', email: 'jayjay@yaya.com', username: 'bigJ'},
              {id: 004, name:'Old Fella', email: 'hik@yaya.com', username: 'cleetus77'},
              {id: 005, name:'Mugsy', email: 'papa@yaya.com', username: 'madDog'},
          ])
      })
}