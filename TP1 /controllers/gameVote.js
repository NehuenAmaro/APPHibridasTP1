import GameVotesService from '../services/gameVote.js'

async function createVote(req, res) {
    return GameVotesService.createVote(req.body)
        .then(function (vote) {
            res.status(201).json(vote)
        })
        .catch(function (err) {
            res.status(500).json({ msg: err.message });
        })
}

export {
    createVote,
}

export default {
    createVote,
}