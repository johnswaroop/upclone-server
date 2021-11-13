const mongoose = require('../db')

const devProfileSchema = new mongoose.Schema({
    uid: String,
    profile: String,
    skills: [String],
    description: String,
    resumeUrl: String,
    hourlyRate: String
})

const devProfile = mongoose.model("DevProfile", devProfileSchema);

module.exports = devProfile;