const mongoose = require("mongoose");


const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        placeOfBirth: {
            type: String,
            required: true
        },
        height: {
            type: Number
        },
        weight: {
            type: Number
        },
        positionOnNationalTeam: {
            type: String,
            required: true
        },
        appearancesOnNationalTeam: {
            type: Number,
            required: true
        },
        goalsOnNationalTeam: {
            type: Number,
            required: true
        },
        captain: {
            type: Boolean,
            default: false,
        },
        image : {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("Player", PlayerSchema)
