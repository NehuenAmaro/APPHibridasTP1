import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient ('mongodb://127.0.0.1:27017')
const db = client.db("gotoJam")
const VoteCollection = db.collection('votes')


app.get


async function createVote(req, res) {
  await client.connect()

  const newVote = {
      judge_id: req.body.judge_id,
      game_id: req.body.game_id,
      gameplay: req.body.gameplay,
      art: req.body.art,
      sound: req.body.sound,
      theme: req.body.theme
  }

  /// side effect
  await VoteCollection.insertOne(newVote)

  return newVote
}

/* async function createVote(vote) {
  await client.connect()

  const { idJudge } = req

  const newVote = {
      "judge_id": req.body.,
      "game_id": game,
      "gameplay": points.gameplay,
      "art": points.art,
      "sound": points.sound,
      "theme": points.theme
  }

  /// side effect
  await VoteCollection.insertOne(newVote)

  return newVote
}
 */