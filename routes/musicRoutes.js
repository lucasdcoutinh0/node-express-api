const router = require('express').Router()

const Music = require('../models/Music')

router.post('/', async (req, res) => {
    const { name, type, path } = req.body
  
    const music = {
      name,
      type,
      path
    }
  
    try {
      await Music.create(music)
  
      res.status(201).json({ message: 'Musica inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/', async (req, res) => {
    try {
      const musics = await Music.find()
  
      res.status(200).json(musics)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const music = await Music.findOne({ _id: id })
  
      if (!music) {
        res.status(422).json({ message: 'Musica não encontrada!' })
        return
      }
  
      res.status(200).json(music)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.patch('/:id', async (req, res) => {
    const id = req.params.id
  
    const { name, type, path } = req.body
  
    const music = {
      name,
      type,
      path
    }
  
    try {
      const updatedMusic = await Music.updateOne({ _id: id }, serie)
  
      if (updatedMusic.matchedCount === 0) {
        res.status(422).json({ message: 'Musica não encontrada!' })
        return
      }
  
      res.status(200).json(music)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
router.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    const music = await Music.findOne({ _id: id })
  
    if (!serie) {
      res.status(422).json({ message: 'Musica não encontrada!' })
      return
    }
  
    try {
      await Music.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Musica removida com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })







module.exports = router