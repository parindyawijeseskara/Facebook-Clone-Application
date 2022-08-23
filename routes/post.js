const express = require('express')
const router = express.Router()
const Post = require('../models/post.models')

//create posts
router.post('/',async(req,res)=>{
    const post = new Post({
        userId : req.body.userId,
        date : req.body.date,
        time : req.body.time,
        title : req.body.title,
        body : req.body.body
    })

    try {
        const response = await post.save()
        res.json(response)
        
    } catch (err) {
        res.send('Err:'+err)
    }
})

//get all posts
router.get('/',async(req,res)=>{
    try {
        const post = await Post.find()
        res.json(post)
    } catch (err) {
        res.send('Err:'+err)
    }
})

//update posts
router.put('/:id',async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        post.userId = req.body.userId
        post.date = req.body.date
        post.time = req.body.time
        post.title = req.body.title
        post.body = req.body.body

        const response = await post.save()
        res.json(response)
        
    } catch (err) {
        res.send('Err:'+err)
    }
})

//get all posts by userId
router.get('/:userId',async(req,res)=>{
    try {
        const post = await Post.find({userId:req.params.userId})
        res.send(post)
        
    } catch (err) {
        res.send('Err:'+err)
    }
})

//delete posts by id
router.delete('/:id',async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        const response = await post.remove()
        res.json(response)
        
    } catch (err) {
        res.send('Err:'+err)
    }
})


module.exports = router