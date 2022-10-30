const router = require('express').Router()
const passport = require('passport')
const typesServices = require('./types.services')
const adminValidate = require('../middlewares/role.middleware')

router.route('/')
.get(typesServices.getAllTypes)
.post(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    typesServices.postTypes)
    
    
    router.route('/:id')
.get(typesServices.getTypesById)
.delete(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    typesServices.deleteTypes)

    

module.exports=router