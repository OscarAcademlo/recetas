const router = require('express').Router()
const passport = require('passport')
const categoryServices = require('./categories.services')
const adminValidate = require('../middlewares/role.middleware')

router.route('/')
.get(categoryServices.getAllCategories)
.post(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    categoryServices.postCategory)
    
    
    router.route('/:id')
.get(categoryServices.getCategoryById)
.delete(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    categoryServices.deleteCategory)

    

module.exports=router