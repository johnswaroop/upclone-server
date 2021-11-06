const { json } = require('express');
const express = require('express') ;
require('./db')
const app = express();
const port = 5000;

app.use(json());

app.use('/signup',require('./routes/signup'));
app.use('/signin',require('./routes/signin'));

app.get('/test',(req,res)=>{
    res.json({status:"Working"});
})

// Routes


app.listen(port,()=>{
    console.log("-- SERVER RUNNING --")
})