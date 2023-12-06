import express from 'express';
import GameVotesController from '../controllers/gameVote.js'

const route = express.Router()

/* route.get('/votes', GameVotesController.getVotes) */
route.post('/votes', GameVotesController.createVote)

export default route