const express = require("express");
const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT

const {connectDB} = require("./config/db.js");
const playersRoute = require("./routes/players.js")
const authRoute = require("./routes/auth.js")
const usersRoute = require("./routes/users.js")


connectDB();

const app = express()



// MIDDLEWARES

// for handling cookies
app.use(cookieParser())
// In order to post data to db
app.use(express.json());

// ROUTES MIDDLEWARE
app.use("/api/players", playersRoute)
app.use("/api/users", usersRoute)
app.use("/api/auth", authRoute)


// ERROR HANDLING MIDDLEWARE
app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.listen(PORT, () => {
    console.log(`Backend is listening on port ${PORT} `)
});