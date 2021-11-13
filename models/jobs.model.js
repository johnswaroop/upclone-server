const mongoose = require('../db')

const jobSchema = new mongoose.Schema({
    uid: String,
    headline: String,
    jobDesc: String,
    skills: [String],
    difficulty: String,
    scale: String,
    duration: String,
    budget: String,
    budgetType: String,
    minHour: String,
    maxHour: String,
    jobDescDoc: String
})

const jobs = mongoose.model('jobs', jobSchema);

module.exports = jobs;