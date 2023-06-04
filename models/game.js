const mongoose = require("mongoose");
const game = new mongoose.Schema({
  title: String,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher",
  },
});
module.exports = game;
