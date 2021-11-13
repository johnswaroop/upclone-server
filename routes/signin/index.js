const router = require('express').Router();
const jwt = require('jsonwebtoken');
const user = require('../../models/user.model')

const signin = async (req, res) => {

    let { email, password } = req.body;
    let dbres = await user.findOne({ "email": email, "password": password });

    if (dbres) {
        let token = JSON.stringify({ _id: dbres.id, _userType: dbres.userType })
        jwt.sign(token, "upworkclone", (err, token) => {
            if (err) {
                res.json({ status: "error", error: err });
            }
            else {
                res.json({ status: "success", token: token, userType: dbres.userType });
            }
        });
    }
    else {
        res.json({ status: "error", error: "auth error" });
    }
}

router.post('/', signin)

module.exports = router;