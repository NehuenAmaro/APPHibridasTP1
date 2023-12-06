import express from 'express';
import GamesController from '../controllers/game.js'

const route = express.Router()

route.get('/games', GamesController.getGames)
route.get('/games/:idGame', GamesController.getGameById)
route.get('/leaderboard/:edition', GamesController.getGameByEdition)

route.post('/games', GamesController.createGame)

export default route