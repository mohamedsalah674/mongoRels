const mongoose = require("mongoose");
const publisher = new mongoose.Schema({
  companyName: String,
  firstParty: Boolean,
  website: String,
});
module.exports = publisher;
