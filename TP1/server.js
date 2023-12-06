import express from 'express'
import GamesRoute from './routes/game.js'
import VoteRoute from './routes/gameVote.js'

const app = express()
app.use(express.json())

app.use(GamesRoute)
app.use(VoteRoute)


app.listen(2023, function() {
    console.log("El servidor esta On - http://localhost:2023")
})