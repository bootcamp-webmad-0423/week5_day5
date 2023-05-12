const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')
const uploaderMiddleware = require('../middleware/uploader.middleware')

router.get("/", (req, res, next) => {
    Movie
        .find()
        .then(movies => res.render('movies/list', { movies }))
        .catch(err => next(err))
})


router.get("/crear", (req, res, next) => {
    res.render("movies/create")
})


router.post("/crear", uploaderMiddleware.single('imageUrl'), (req, res, next) => {

    const { path: imageUrl } = req.file
    const { title, description } = req.body

    Movie
        .create({ title, description, imageUrl })
        .then(() => res.redirect('/peliculas'))
        .catch(err => next(err))

})





module.exports = router