const jwtSecret = require('./utils')
const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    let bearerToken = req.headers.authorization.split(" ")[1];
    try {
        let token = jwt.verify(bearerToken, jwtSecret);
        console.log(token);
        req._id = token._id;
        req._userType = token._userType;
    }
    catch (e) {
        res.send({ status: "error", error: "invalid auth" });
        return;
    }
    next();
}

// returns _id (user object id)
// _userType (userType)

module.exports = auth;