const router = require('express').Router()
const Video = require('../models/Videos.js')
require('colors')

// @desc:   Get all videos and filter
// @route:  GET /
router.get('/', (req, res) => {
  Video.find(req.query)
    .then((videos) => res.status(200).json(videos))
    .catch((err) => res.status(500).json(`Error: ${err}`))
})

// @desc:   Get video by id
// @route:  GET /:id

router.get('/:id', (req, res) => {
  Video.findById(req.params.id)
    .then((video) => res.status(200).json(video))
    .catch((err) => res.status(500).json(`Error: ${err}`))
})

// @desc:   Add new video
// @route:  POST /
router.post('/', (req, res) => {
  if (true) {
    const newVideo = new Video({
      url: req.body.url,
      votes: req.body.votes,
    })
    newVideo
      .save()
      .then(() => res.status(201).json(newVideo))
      .catch((err) => res.status(500).json(`Error: ${err}`))
  } else {
    res.status(403).json(`Unauthorized post attempt!`)
  }
})

// @desc:   Update the video
// @route:  PATCH /:id
router.patch('/:id', (req, res) => {
  if (req.query.data === process.env.DATA) {
    Video.findByIdAndUpdate(req.params.id)
      .then((video) => {
        ;(video.url = req.body.url), (video.votes = req.body.votes)
        video
          .save()
          .then(() =>
            res
              .status(201)
              .json(`Video with id ${req.params.id} has been update`)
          )
          .catch((err) => res.status(500).json(`Error: ${err}`))
      })
      .catch((err) => res.status(500).json(`Error: ${err}`))
  } else {
    res.status(403).json(`Unauthorized patch attempt!`)
  }
})

// @desc:   Delete video by id
// @route:  DELETE /:id
router.delete('/:id', (req, res) => {
  if (req.query.data === process.env.DATA) {
    Video.findByIdAndDelete(req.params.id)
      .then(() =>
        res.status(200).json(`Video with id ${req.params.id} has been deleted!`)
      )
      .catch((err) => res.status(500).json(`Error: ${err}`))
  } else {
    res.status(403).json('Unauthorized delete attempt!')
  }
})

module.exports = router
