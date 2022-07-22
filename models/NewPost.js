const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user : {
        type: String,
        trim: true,
    },
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

// user: {
//     type: Schema.Types.ObjectId,
//     ref: "users"
// }
module.exports = mongoose.model("newposts", PostSchema);
