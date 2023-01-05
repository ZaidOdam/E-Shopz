const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    // createdAt:Date.now() -No need if using mongoose we have option like timestamps
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);