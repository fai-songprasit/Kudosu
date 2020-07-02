const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

//https://sugoku.herokuapp.com/board?difficulty=${level} => e.g easy, medium, hard or random

router.get('/:level', (req, res) => {
  request
    .get(`http://sugoku.herokuapp.com/board${req.params.level}`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.data.children)
      }
    })
})

module.exports = router