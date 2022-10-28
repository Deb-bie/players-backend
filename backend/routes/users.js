const express = require("express")
const router = express.Router();

const {updateUser, deleteUser} = require("../controllers/user.js");
const { verifyUser } = require("../utils/verifyToken.js");

// UPDATE USER
router.put("/:id", verifyUser, updateUser)


// DELETE uSER
router.delete("/:id",verifyUser, deleteUser)

module.exports = router;