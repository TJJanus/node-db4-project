
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { instruction: 'Oil the pan', recipe_id: 1 },
        { instruction: 'preheat the over to 450 degrees', recipe_id: 1 },
        { instruction: 'Add butter to the bowl and mix forever', recipe_id: 1 },
        { instruction: 'Throw some salt and pepper on it', recipe_id: 2 },
        { instruction: 'Add 3 lbs of flour to the pot', recipe_id: 3 },
      ]);
    });
};
