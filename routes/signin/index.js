const router = require('express').Router();
const jwt = require('jsonwebtoken');
const user = require('../../models/user.model')

const signin = async (req, res) => {

    let { email, password } = req.body;
    let dbres = await user.findOne({ "email": email, "password": password });

    if (dbres) {
        jwt.sign(dbres.email, "upworkclone", (err, token) => {
            if (err) {
                res.json({ status: "error", error: err });
            }
            else {
                res.json({ status: "success", token: token });
            }
        });
    }
    else {
        res.json({ status: "error", error: "auth error" });
    }
}

router.post('/', signin)

module.exports = router;