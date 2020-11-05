
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'eggs', quantity: '5'},
        { ingredient_name: 'milk', quantity: '6'},
        { ingredient_name: 'flour', quantity: '7'}
      ]);
    });
};
