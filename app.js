const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 5000;

const url = 'mongodb://localhost/facebook-clone'
mongoose.connect(url,{useNewUrlParser : true})
const con = mongoose.connection

con.on("open",()=>{
    console.log("MongoDB Connected!");
})

app.use(express.json())


app.get('/',(req,res)=>{
    console.log('get request coming!');
    res.send('get req came for / route');
}) 

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})