module.exports = (questionDB) => {
  const express = require("express");
  const router = express.Router();
  const bodyParser = require('body-parser');

  /**** Routes ****/
  router.get('/', async (req, res) => {
    const questions = await questionDB.getQuestions(); 
    res.json(questions);
  });

  router.get('/:id', async (req, res) => {
    const question = await questionDB.getQuestion(req.params.id);
    res.json(question);
  });

  router.post('/', async (req, res) => {
    const question = await questionDB.createQuestion(req.params.title, req.params.description)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.send("error posting to db")
      });
  });

  return router;
}
