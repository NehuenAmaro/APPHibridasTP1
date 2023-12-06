import GamesService from "../services/game.js"


function getGames(req, res) {
    GamesService.getGames(req.query)
    .then(function (games){
       res.status(200).json(games)
    })
}


async function getGameById(req, res) {
    const {idGame} = req.params

    GamesService.getGameById(idGame)
        .then(function (games)  {
            return res.status(200).json(games)
        })
        .catch(function (err) {
            if (err?.code) {
                res.status(err.code).json({ msg: err.msg})
            } else {
                res.status(500).json({ msg:"No se pudo obtener el Juego"})
            }
    })
}

async function getGameByEdition(req, res) {
    const edition = parseInt(req.params.edition, 10);

    GamesService.getGameByEdition(edition)
        .then(function (games)  {
            return res.status(200).json(games)
        })
        .catch(function (err) {
            if (err?.code) {
                res.status(err.code).json({ msg: err.msg})
            } else {
                res.status(500).json({ msg:"No se pudo obtener el Juego"})
            }
    })

}


async function createGame(req, res) {
    return GamesService.createGame(req.body)
    .then(function (game) {
        res.status(201).json(game)
    })
      .catch(function (err) {
        res.status(500).json({ msg: err.msg })
    })
}


export {
    getGames,
    getGameById,
    getGameByEdition,
    createGame,
}

export default {
    getGames,
    getGameById,
    getGameByEdition,
    createGame,
}