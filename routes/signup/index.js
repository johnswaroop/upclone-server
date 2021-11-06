const router = require('express').Router();
const userModel = require('../../models/user.model')
const jwt = require('jsonwebtoken')

//route = /signup

let createUser = (req, res, next) => {
    let { firstName, lastName, email, password, rePassword } = req.body;
    let user = new userModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    })
    user.save((er) => {
        if (er) {
            res.json({
                status: "error",
                error: er
            });
        }
        else {
            next()
        }
    })
}

let jwtSign = (req, res) => {
    jwt.sign({ email: req.body.email }, "upworkclone", (err, token) => {
        if (err) {
            res.json({
                status: "error",
                error: er
            });
        }
        else {
            res.json({
                status: "success",
                token: token
            });
        }

    });

}

router.post('/', createUser, jwtSign);

module.exports = router