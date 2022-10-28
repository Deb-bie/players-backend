const User = require("../models/User.js")

// UPDATE
const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {new: true}, 
            {$set: req.body}
        )
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}


// DELETE
const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted")
    } catch (error) {
        next(error)
    }
}



module.exports = {
    updateUser,
    deleteUser,
}