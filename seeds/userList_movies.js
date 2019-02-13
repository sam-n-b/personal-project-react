
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userList_movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('userList_movies').insert([
        {id: 501, userId: 1, movieId:249688, rating:3, review:'good'},
        {id: 502, userId: 1, movieId:347031, rating:2, review:'not so good'},
        {id: 503, userId: 1, movieId:114150, rating:4, review:'pow!'},
        {id: 504, userId: 1, movieId:864, rating:5, review:"I see pride, I see power, I see a badass mother who dont take no crap off of nobody. I see pride, I see power, I see a badass mother who don't take no crap off of nobody"},
        {id: 505, userId: 1, movieId:443463, rating:3.5, review:'aight'},
        {id: 506, userId: 2, movieId:249688, rating:5, review:'perfect'},
        {id: 507, userId: 2, movieId:114150, rating:3, review:'yup'},
        {id: 508, userId: 3, movieId:11324, rating:5, review:'best ever'},
        {id: 509, userId: 3, movieId:264660, rating:4, review:'niiiice'},
        {id: 510, userId: 3, movieId:244786, rating:1, review:'I want to die'},
        {id: 511, userId: 3, movieId:347031, rating:1.5, review:'meh'},
        {id: 512, userId: 3, movieId:169813, rating:2, review:'slightly less meh'},
        {id: 513, userId: 4, movieId:597, rating:1.5, review:'I wish they both drowned'},
        {id: 514, userId: 4, movieId:426426, rating:4.5, review:'more good'},
        {id: 515, userId: 4, movieId:169813, rating:5, review:'most good'},
        {id: 516, userId: 4, movieId:920, rating:1.5, review:'lame'},
        {id: 517, userId: 4, movieId:347031, rating:4, review:'love it'},
        {id: 518, userId: 4, movieId:864, rating:3.5, review:'A very good documentary'},
        {id: 519, userId: 5, movieId:249688, rating:3, review:'so so'},
        {id: 520, userId: 5, movieId:114150, rating:2, review:'dumb'},
        {id: 521, userId: 5, movieId:443463, rating:2.5, review:'mediocre'},
        {id: 522, userId: 5, movieId:920, rating:4, review:'above averate'},
        {id: 523, userId: 5, movieId:244786, rating:3.5, review:'not bad'},
        {id: 524, userId: 5, movieId:426426, rating:3, review:'okay'}
      ]);
    });
};
