const express = require("express")
const router = express.Router();

const {createPlayer, updatePlayer, deletePlayer, getOnePlayer, getAllPlayers} = require("../controllers/player.js")


// CREATE
router.post("/", createPlayer)

// UPDATE
router.put("/:id", updatePlayer)

// DELETE
router.delete("/:id", deletePlayer)

// GET ONE
router.get("/:id", getOnePlayer)

// GET ALL
router.get("/", getAllPlayers)


module.exports = router;