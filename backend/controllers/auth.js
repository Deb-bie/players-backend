const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User.js")
const { createError } = require("../utils/error.js")


const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const harsh = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        res.status(200).json("User created successfully")
    } catch (error) {
        next(error)
    }
}


const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if (!user) return next(createError(404, "User not found"))

        const Password = await bcrypt.compare(req.body.password, user.password)
        if(!Password) return next(createError(400, "Wrong Password"))

        const token = jwt.sign(
            {
                id:user._id,
            },
            process.env.JWT
        )

        // destructuring users so that we only show the deatils we want
        const { password, ...details} = user._doc

        res.cookie(
            "access_token", token, 
            { httpOnly: true }
        )
        .status(200).json({ ...details })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login
}
