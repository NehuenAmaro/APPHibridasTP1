import { Console } from "console"
import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient ('mongodb://127.0.0.1:27017')
const db = client.db("gotoJam")
const votesCollection = db.collection('votes')
const gamesCollection = db.collection('games')
const judgesCollection = db.collection('judges')

async function createVote(data) {
    
    const judge = await judgesCollection.findOne({ _id: new ObjectId(data.judge_id) }); 
    const game =  await gamesCollection.findOne({ _id: new ObjectId(data.game_id) });
    console.log(data.gameplay)

    const newVote = {
        judge_id: judge,
        game: {
            _id: game._id,
            name: game.name 
        },

        points: {
            gameplay: data.gameplay,
            art: data.art,
            sound: data.sound,
            theme: data.theme 

        }
    };

    votesCollection.insertOne(newVote);
    const totalPoints = data.gameplay + data.art + data.sound + data.theme;

    const averagePoints = totalPoints / 4 // Para que no aparezcan numeros muy grandes (2 votaciones con numeros altos puede reflejar en totalpoints 73) y se pueda interpretar mejor

    await gamesCollection.updateOne({ _id: new ObjectId(data.game_id) },{ $inc: { totalPoints: averagePoints } });
    
    return newVote;
}


export {
    createVote
}

export default {
    createVote,
}