const jwt = require("jsonwebtoken")
const { createError } = require("./error.js")

// verifyToken
const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            next(createError(401, "You are not authenticated"))
        }

        jwt.verify(token, process.env.JWT, (error, user) => {
            if(error) {
                return next(createError(403, "Token invalid"))
            }

            req.okay = user;

            next()

        })
    } catch (error) {}
}


// verifyUser
const verifyUser = async (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id){
            return next()
        } else {
            if (error) {
                return next(createError(403, "You are not authorised"))
            }
        }
    })
}

module.exports = {
    verifyToken,
    verifyUser
}