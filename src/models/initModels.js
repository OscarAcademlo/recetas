const Users = require('./users.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Recipes = require('./recipes.models')
const Types = require('./types.models')
const UsersIngredients = require('./user_ingredients.models')
const UsersRecipes = require('./user_recipes.models')

const initModels = () => {
    //? hasMany llave foranea dentro de parentesis
    //? belongsTo llave foranea en primer paramentro

    //* Users 1:M Recipes
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    //* Users 1:M UserRecipes
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    //* Recipes 1:M UserRecipes
    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    //* Users 1:M UserIngredients
    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    //* Ingredients 1:M UserIngredients
    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)
    
    //  recipes M:1  Categories
    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    //ingredients  M:1 types
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    //recipes 1:M recipesIngredients
    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    //ingredients 1:M recipesIngredients
    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    //recipes  1:M instructions
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)

}


module.exports = initModels