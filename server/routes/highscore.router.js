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


// adjust high score
router.put('/update/:id', (req, res) => {
  console.log('In high score PUT with:', req.body, req.params);
  const game = req.body.game;
  const score = req.body.score;
  const queryText = `UPDATE "high_scores" SET ${game} = $1 WHERE "id"=$2;`;
  pool.query(queryText, [score, Number(req.params.id)])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log("Error updating high score PUT", err);
      res.sendStatus(500);
    });
})

module.exports = router;