const mongoose = require("mongoose");

const publisherSchema = require("./models/publisher");
const gameSchema = require("./models/game");
const ex = () => {
  mongoose
    .connect(
      "mongodb+srv://drogo:1234@cluster0.gobpslr.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Now connected to MongoDB!"))
    .catch((err) => console.error("Something went wrong", err));

  const Publisher = mongoose.model("Publisher", publisherSchema);
  const Game = mongoose.model("Game", gameSchema);

  async function createPublisher(companyName, firstParty, website) {
    const publisher = new Publisher({
      companyName,
      firstParty,
      website,
    });

    const result = await publisher.save();
    console.log(result);
  }

  async function createGame(title, publisher) {
    const game = new Game({
      title,
      publisher,
    });

    const result = await game.save();
    console.log(result);
  }

  // async function listGames() {
  //   const games = await Game.find().select("title publisher");
  //   console.log(games);
  // }

  async function listGames() {
    const games = await Game.find()
      .populate("publisher")
      .select("title publisher");
    console.log(games);
  }

  // So let’s say you only want to see the company
  // name of the publisher but not all the other associated data of the publisher.
  //  Great, just update your populate() call like so.

  // async function listGames() {
  //   const games = await Game.find()
  //     .populate("publisher", "companyName")
  //     .select("title publisher");
  //   console.log(games);
  // }

  //to remove the id from the results
  // async function listGames() {
  //   const games = await Game.find()
  //     .populate("publisher", "companyName -_id")
  //     .select("title publisher");
  //   console.log(games);
  // }

  listGames();
};

module.exports = ex;
