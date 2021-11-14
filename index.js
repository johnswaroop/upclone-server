const { json } = require('express');
const express = require('express');
const path = require('path')
require('./db')
const app = express();
const port = 5000;

console.log(path.join(__dirname, 'public/index.html'));

app.use(json());
app.use(express.static('public'));
app.get(/^\/(?!api).*/, function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

//server api routes

app.use('/api/signup', require('./routes/signup'));
app.use('/api/signin', require('./routes/signin'));
app.use('/api/jobpost', require('./routes/jobpost'));
app.use('/api/postUserType', require('./routes/postUserType'));
app.use('/api/postDevProfile', require('./routes/devProfile'));

app.get('/', (req, res) => {
    res.json({ status: "Working" });
})

app.listen(port, () => {
    console.log("-- SERVER RUNNING --")
})