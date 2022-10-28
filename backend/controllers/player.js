const Player = require("../models/Player.js")

// CREATE A PLAYER
const createPlayer = async (req,res,next) => {
    const newPlayer = new Player(req.body);
    try {
        const savedPlayer = await newPlayer.save()
        res.status(200).json(savedPlayer)
    } catch (error) {
        next(error)
    }
} 

// UPDATE A PLAYER
const updatePlayer = async (req, res, next) => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(
            req.params.id,
            {new: true},
            {$set: req.body}
        )
        res.status(200).json(updatedPlayer)
    } catch (error) {
        next(error)
    }
}

// DELETE A PLAYER
const deletePlayer = async (req, res, next) => {
    try {
        await Player.findByIdAndDelete(req.params.id)
        res.status(200).json("This player has been deleted")
    } catch (error) {
        next(error)
    }
}

// GET A PLAYER
const getOnePlayer = async (req, res, next) => {
    try {
        const onePlayer = Player.findById(req.params.id)
        res.status(200).json(onePlayer)
    } catch (error) {
        next(error)
    }
}

// GET ALL PLAYERS
const getAllPlayers = async (req, res, next) => {
    try {
        const allPlayers = Player.find()
        res.status(200).json(allPlayers)
    } catch (error) {
        next(200)
    }
}

module.exports = {
    createPlayer,
    updatePlayer,
    deletePlayer,
    getOnePlayer,
    getAllPlayers
}