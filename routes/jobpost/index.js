const router = require('express').Router();
const jwt = require('jsonwebtoken');
const jobModel = require('../../models/jobs.model')
const auth = require("../../utils/auth")


const jobpost = async (req, res) => {
    console.log(req.body);

    let jobpost = new jobModel({ uid: req._id, ...req.body });
    try {
        let dbres = await jobpost.save();
        console.log(dbres);
    }
    catch (er) {
        console.log(er)
        res.send({ status: "error", error: "DB error" });
    }

    res.send({ status: "success" });
}

router.post('/', auth, jobpost)

module.exports = router;