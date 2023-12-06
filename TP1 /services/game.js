import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient ('mongodb://127.0.0.1:27017')
const db = client.db("gotoJam")
const GameCollection = db.collection('games')



function filterQueryToMongo(filter) {
    const filterMongo = {}
  
    for (const filed in filter) {
      if (isNaN(filter[filed])) {
        filterMongo[filed] = filter[filed]
      }
      else {
        filterMongo[filed] = parseInt(filter[filed])
  
      }
    }
  
    return filterMongo
}

  
async function getGames(filter = {}) {
    await client.connect()
  
    const filterMongo = filterQueryToMongo(filter)
  
    return GameCollection.find(filterMongo).toArray()
}

async function getGameById(id){
    await client.connect()

    return GameCollection.findOne({_id: new ObjectId(id)})
}



async function getGameByEdition(edition){
    await client.connect()
    
    const games = await GameCollection.find({ edition: edition }).sort({ totalPoints: 1 }).toArray();

    return games
}



async function createGame(game){
    await client.connect()

    const newGame = {...game}
    await GameCollection.insertOne(newGame)

    return newGame
}


export {
    getGames,
    getGameById,
    getGameByEdition,
    createGame
}

export default {
    getGames,
    getGameById,
    getGameByEdition,
    createGame
}