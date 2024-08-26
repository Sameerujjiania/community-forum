// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const gameSchema = new Schema({
//    title: { type: String, required: true },
// });

// // Use 'mongoose.model' instead of 'mongoose.Model'
// exports.gameModel = mongoose.model('games', gameSchema);




const mongoose = require("mongoose");

const game = new mongoose.Schema({
   "title": String,
   "releaseDate": String,
   "producer": String,
   "summary": String,
   "rating": {
    type: Number,
    default: 0,
  },
   "downloads": {
    type: String,
    default: 0,
  },
  "thumbnail": String
})

const gameModel = mongoose.model('games',game);
module.exports = gameModel;