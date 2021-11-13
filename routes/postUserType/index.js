const router = require('express').Router();
const jwt = require('jsonwebtoken');
const auth = require("../../utils/auth")
const userModel = require('../../models/user.model');

const postUserType = async (req, res) => {
    let { userType, country } = req.body;
    let userId = req._id;
    userModel.findByIdAndUpdate(userId, { userType, country }, (err, doc) => {
        if (err) {
            console.log(err)
            res.send({ status: "error", error: "server error" });
        }
        else {
            res.send({ status: "success" })
        }
    })

}

router.post('/', auth, postUserType);

module.exports = router;