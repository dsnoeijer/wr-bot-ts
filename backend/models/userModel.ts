import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: false
    }
})

const database = mongoose.model("Users", userSchema);

module.exports = database;