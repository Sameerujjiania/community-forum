const mongoose = require('mongoose');
const gameModel = require('../models/gameModel');


exports.getAllGames = async (req,res) => {
    const games = await gameModel.find();
    res.json(games);
}
exports.getTrendingGames = async (req,res) => {
    const games = await gameModel.find({rating: {$gt:4.4}});
    try{
        console.log("first")
         res.json(games);
    }
    catch(err){
        res.status(404).json(err)
    }
}
exports.getGame = async (req,res) => {
    const gameName = req.params;
    const game = await gameModel.find({title:gameName.id});
    res.json(game);
}


exports.deleteGame = async (req, res) => {
    try {
        const idd = req.body._id;  // Extract _id from the request body
        const deletedGame = await gameModel.findByIdAndDelete(idd);  // Wait for the deletion to complete

        if (deletedGame) {
            res.json({ message: "Game deleted successfully", deletedGame });
        } else {
            res.status(404).json({ message: "Game not found" });
        }
        
        console.log("deleted = ", idd);
    } catch (error) {
        console.error("Error deleting game:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


exports.createGame = async(req,res) => {
    const game = await new gameModel(req.body);
    try {
        game.save();
        res.json(game);
        console.log("game added")
    }
    catch(err){
        res.json(err);
    }
}