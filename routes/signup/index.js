const router = require('express').Router();
const userModel = require('../../models/user.model')
const jwt = require('jsonwebtoken')

//route = /signup

let createUser = async (req, res, next) => {
    let { firstName, lastName, email, password, rePassword, userType, country } = req.body;
    let user = new userModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        userType,
        country
    })
    await user.save((er, result) => {
        if (er) {
            res.json({
                status: "error",
                error: er
            });
        }
        else {
            token = JSON.stringify({ _id: result.id, userType })
            jwt.sign(token, "upworkclone", (err, token) => {
                if (err) {
                    res.json({ status: "error", error: err });
                }
                else {
                    res.json({ status: "success", token: token });
                }
            });
        }
    })
}



router.post('/', createUser);

module.exports = router