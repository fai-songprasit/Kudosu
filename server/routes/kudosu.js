const express = require('express')
const request = require('superagent')
const router = express.Router()

router.use(express.json())

router.get('/:level', (req, res) => {
  request
    .get(`http://sugoku.herokuapp.com/board?difficulty=${req.params.level}`)
    .then(result => {
      res.json(result.body)
    })
    .catch(err => {
      res.status(500)
      console.log(err)
    })
})

module.exports = router