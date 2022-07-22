const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Name must be required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Name must be required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  rpassword: {
    type: String,
    required: [true, "Name must be required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  email : {
    type : String,
    unique: true,
    trim: true,
  },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", UserSchema);
