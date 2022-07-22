const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://thao:0Ix37qdlE0ksqLZY@cluster0.tmdhcnc.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}
module.exports = { connect };
