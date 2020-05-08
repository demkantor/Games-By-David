const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// return all high scores
router.get('/all', (req, res) => {
  console.log("in server all high scores GET");
  const queryText = `SELECT * FROM "high_scores" ORDER BY "id" ASC;`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error on GET all high scores query ${error}`);
          res.sendStatus(500);
      });
});

// return number of games played
router.get('/games/played', (req, res) => {
  console.log("in server games played GET");
  const queryText = `SELECT * FROM "games_played" ORDER BY "id" ASC;`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error on GET all games played query ${error}`);
          res.sendStatus(500);
      });
});

// adjust games played
router.put('/games/played/update', (req, res) => {
  console.log('In games played PUT with:', req.body, req.params);
  const game = req.body.game;
  const score = req.body.score;
  const queryText = `UPDATE "games_played" SET ${game} = $1 WHERE "id"=1;`;
  pool.query(queryText, [score])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log("Error updating high score PUT", err);
      res.sendStatus(500);
    });
})

module.exports = router;