exports.seed = function (knex, Promise) {
  return knex('userList').del()
      .then(function (){
          return knex('userList').insert([
              {id: 001, name:'Michael', email: 'yaya@yaya.com', username: 'borg'},
              {id: 002, name: 'Tina', email: 'tina@yaya.com', username: 'makaka'},
              {id: 003, name:'Jerome', email: 'jayjay@yaya.com', username: 'bigJ'},
              {id: 004, name:'Zoe', email: 'hik@yaya.com', username: 'cleetus77'},
              {id: 005, name:'Papa', email: 'papa@yaya.com', username: 'madDog'},
          ])
      })
}