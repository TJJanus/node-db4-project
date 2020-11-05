const db = require("../data/db-config")

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipe_id) {
/* select 
r.recipe_name,
i.ingredient_name,
i.quantity
from recipes as r
join ingredients as i
on r.id=i.id
*/
  return db("recipes as r")
  .select('r.id as recipe_id', 'r.recipe_name', 'i.ingredient_name', 'i.quantity')
  .join('ingredients as i', 'r.id', 'i.id' )
  .where({'r.id': recipe_id})
}

function getInstructions(recipe_id) {

  return db("recipes as r")
    .select("s.id as step", "r.id as recipe_id", "s.instruction")
    .innerJoin("steps as s", "s.recipe_id", "r.id")
    .where("r.id", recipe_id)
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
}