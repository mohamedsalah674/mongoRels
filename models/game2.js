const mongoose = require("mongoose");
const publisherSchema = require("../models/publisher");
const game = new mongoose.Schema({
  title: String,
  publisher: publisherSchema,
});
module.exports = game;
