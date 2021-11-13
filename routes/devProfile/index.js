const router = require('express').Router();
const jwt = require('jsonwebtoken');
const auth = require("../../utils/auth");
const devProfileSchema = require("../../models/devProfil.model");



const devProfile = async (req, res) => {
    console.log(req._id, req.body);
    if (req._userType !== "freelance") {
        const devForm = new devProfileSchema({
            uid: req._id, ...req.body
        })

        try {
            let dbres = await devForm.save();
            console.log(dbres);
        }
        catch (er) {
            console.log(er)
            res.send({ status: "error", error: "DB error" });
        }
    }
    else {
        res.send({ status: "error", error: "invalid usertype" })
    }

    res.send({ status: "success" });
}

router.post("/", auth, devProfile);

module.exports = router;