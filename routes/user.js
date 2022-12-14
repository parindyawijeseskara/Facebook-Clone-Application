const express = require('express')
const router = express.Router()
const User = require('../models/user.models')


//register user
router.post('/',async(req,res)=>{
    const user = new User({
        userId: req.body.userId,
        firstName : req.body.firstName,
        surname : req.body.surname,
        gender : req.body.gender,
        dateOfBirth : req.body.dateOfBirth,
        password: req.body.password,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email
    })

    try {
        const response = await user.save()
        res.json(response)
        
    } catch (err) {
        res.send('Err:'+err)
    }
})

//get all users
router.get('/',async(req,res)=>{
    try {
        const user = await User.find()
        res.json(user)
        
    } catch (err) {
        console.log('Err:'+err);
    }
})

//update users
router.put('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        user.userId = req.body.userId
        user.firstName = req.body.firstName
        user.surname = req.body.surname
        user.gender = req.body.gender
        user.dateOfBirth = req.body.dateOfBirth
        user.password = req.body.password
        user.phoneNumber = req.body.phoneNumber
        user.email = req.body.email

        const response = await user.save()
        res.json(response)
        
    } catch (err) {
        res.send('Err:'+err)
    }
})

//get user by id 
router.get('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
        
    } catch (err) {
        res.send('Err:'+err)
    }
})

//delete user by userId
router.delete('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const response = await user.remove()
        res.json(response)
        
    } catch (err) {
        res.send('Err:'+err)
    }
})

//user login using email and password
router.get('/login/:email/:password',async(req,res)=>{
    try {
        const login = await User.find({email:req.params.email,password:req.params.password})
        res.json(login)
    } catch (err) {
        res.send('Err:'+err)
    }
})


module.exports = router