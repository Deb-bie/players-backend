const express = require("express")
const router = express.Router();

const {createPlayer, updatePlayer, deletePlayer, getOnePlayer, getAllPlayers} = require("../controllers/player.js")
const { verifyUser } = require("../utils/verifyToken");


// CREATE
router.post("/", createPlayer)

// UPDATE
router.patch("/:id", verifyUser, updatePlayer)

// DELETE
router.delete("/:id",verifyUser, deletePlayer)

// GET ONE
router.get("/:id", verifyUser, getOnePlayer)

// GET ALL
router.get("/", getAllPlayers)


module.exports = router;