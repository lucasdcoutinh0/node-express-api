const router = require('express').Router()

const Movie = require('../models/Movie')

router.post('/', async (req, res) => {
    const { name, type, path } = req.body
  
    const movie = {
      name,
      type,
      path
    }
  
    try {
      await Movie.create(movie)
  
      res.status(201).json({ message: 'Filme inserido no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/', async (req, res) => {
    try {
      const movies = await Movie.find()
  
      res.status(200).json(movies)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const movie = await Movie.findOne({ _id: id })
  
      if (!movie) {
        res.status(422).json({ message: 'Filme não encontrado!' })
        return
      }
  
      res.status(200).json(movie)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.patch('/:id', async (req, res) => {
    const id = req.params.id
  
    const { name, type, path } = req.body
  
    const movie = {
      name,
      type,
      path
    }
  
    try {
      const updatedMovie = await Movie.updateOne({ _id: id }, serie)
  
      if (updatedMovie.matchedCount === 0) {
        res.status(422).json({ message: 'Filme não encontrado!' })
        return
      }
  
      res.status(200).json(movie)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
router.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    const movie = await Movie.findOne({ _id: id })
  
    if (!serie) {
      res.status(422).json({ message: 'FIlme não encontrado!' })
      return
    }
  
    try {
      await Movie.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Filme removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })







module.exports = router