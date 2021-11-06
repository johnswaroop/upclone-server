const mongoose = require('mongoose');
//mongodb+srv://john:0XdrrfWP3RSEdOJH@cluster0.wzne0.mongodb.net/upwork
mongoose.connect('mongodb+srv://john:0XdrrfWP3RSEdOJH@cluster0.wzne0.mongodb.net/upwork', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("-- DB CONNECTED --");
})

module.exports = mongoose;