const commentContoller = require('../controllers/commentController')
const gameContoller = require('../controllers/gameController')

const express = require('express');
const router = express.Router();


router.get('/games/trending',gameContoller.getTrendingGames)
.post('/games',gameContoller.createGame)
.get('/games',gameContoller.getAllGames)
.get('/games/:id',gameContoller.getGame)
.delete('/games',gameContoller.deleteGame)

exports.router = router;
