
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {movieId: 249688, title: 'End of the Tour', image: '/images/end_of_the_tour.jpg'},
        {movieId: 347031, title: 'Swiss Army Man', image: '/images/swissArmyMan.jpg'},
        {movieId: 114150, title: 'Pitch Perfect', image: '/images/pitchPerfect.jpg'},
        {movieId: 864, title: 'Cool Runnings', image: '/images/coolRunnings.jpg'},
        {movieId: 443463, title: 'Leave No Trace', image: '/images/leaveNoTrace.jpg'},
        {movieId: 11324, title: 'Shutter Island', image: '/images/shutterIsland.jpg'},
        {movieId: 920, title: 'Cars', image: '/images/cars.jpg'},
        {movieId: 264660, title: 'Ex Machina', image: '/images/exMachina.jpg'},
        {movieId: 244786, title: 'Whiplash', image: '/images/whiplash.jpg'},
        {movieId: 597, title: 'Titanic', image: 'images/titanic.jpg'},
        {movieId: 426426, title: 'Roma', image: '/images/roma.jpg'},
        {movieId: 169813, title: 'Short Term 12', image: '/images/shortTerm12.jpg'}
      ]);
    });
};
