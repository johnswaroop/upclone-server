const { json } = require('express');
const express = require('express') ;
require('./db')
const app = express();
const port = 5000;

app.use(json());
app.use(express.static('public'));
app.use('/signup',require('./routes/signup'));
app.use('/signin',require('./routes/signin'));
app.use('/jobpost',require('./routes/jobpost'));
app.use('/postUserType',require('./routes/postUserType'));
app.use('/postDevProfile',require('./routes/devProfile'));

app.get('/',(req,res)=>{
    res.json({status:"Working"});
})

// Routes
app.listen(port,()=>{
    console.log("-- SERVER RUNNING --")
})