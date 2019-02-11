
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {movieId: 249688, title: 'End of the Tour', image: './x'},
        {movieId: 347031, title: 'Swiss Army Man', image: './y'},
        {movieId: 114150, title: 'Pitch Perfect', image: './z'},
        {movieId: 864, title: 'Cool Runnings', image: './x'},
        {movieId: 443463, title: 'Leave No Trace', image: './y'},
        {movieId: 906, title: 'Shutter Island', image: './z'},
        {movieId: 920, title: 'Cars', image: './x'},
        {movieId: 264660, title: 'Ex Machina', image: './y'},
        {movieId: 244786, title: 'Whiplash', image: './z'},
        {movieId: 597, title: 'Titanic', image: './x'},
        {movieId: 426426, title: 'Roma', image: './y'},
        {movieId: 169813, title: 'Short Term 12', image: './z'}
      ]);
    });
};
