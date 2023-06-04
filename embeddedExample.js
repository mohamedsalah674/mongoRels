const mongoose = require("mongoose");

const publisherSchema = require("./models/publisher");
const gameSchema = require("./models/game2");
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

  //   createGame(
  //     "Rayman",
  //     new Publisher({
  //       companyName: "Ubisoft",
  //       firstParty: false,
  //       website: "https://www.ubisoft.com/",
  //     })
  //   );


  // async function updatePublisher(gameId) {
  //   const game = await Game.findById(gameId);
  //   game.publisher.companyName = "Epic Games";
  //   game.publisher.website = "https://epicgames.com/";
  //   game.save();
  // }

  // updatePublisher("6402591ee8bb1dfad0ab1572");

  //update Publisher Directly
  async function updatePublisher(gameId) {
    const game = await Game.findByIdAndUpdate(gameId, {
      $set: {
        "publisher.companyName": "Bethesda Softworks",
        "publisher.website": "https://bethesda.net/",
      },
    });
    console.log("Updated publisher");
  }

  updatePublisher("6402591ee8bb1dfad0ab1572");


  
  //Delete Publisher
  //   async function deletePublisher(gameId) {
  //     const game = await Game.findByIdAndUpdate(gameId, {
  //       $unset: {
  //         publisher: "",
  //       },
  //     });
  //     console.log("removed!!");
  //   }

  //   deletePublisher("640254ff21e568c9f5b3b830");




//                 =========


  // async function listGames() {
  //   const games = await Game.find().select("title publisher");
  //   console.log(games);
  // }

  //   async function listGames() {
  //     const games = await Game.find()
  //       .populate("publisher")
  //       .select("title publisher");
  //     console.log(games);
  //   }

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

  //   listGames();
};

module.exports = ex;
