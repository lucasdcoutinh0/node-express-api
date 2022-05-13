const router = require('express').Router()

const Serie = require('../models/Serie')

router.post('/', async (req, res) => {
    const { name, type, path } = req.body
  
    const serie = {
      name,
      type,
      path
    }
  
    try {
      await Serie.create(serie)
  
      res.status(201).json({ message: 'Serie inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/', async (req, res) => {
    try {
      const series = await Serie.find()
  
      res.status(200).json(series)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.get('/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const serie = await Serie.findOne({ _id: id })
  
      if (!serie) {
        res.status(422).json({ message: 'Serie não encontrada!' })
        return
      }
  
      res.status(200).json(serie)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.patch('/:id', async (req, res) => {
    const id = req.params.id
  
    const { name, type, path } = req.body
  
    const serie = {
      name,
      type,
      path
    }
  
    try {
      const updatedSerie = await Serie.updateOne({ _id: id }, serie)
  
      if (updatedSerie.matchedCount === 0) {
        res.status(422).json({ message: 'Serie não encontrada!' })
        return
      }
  
      res.status(200).json(serie)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
router.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    const serie = await Serie.findOne({ _id: id })
  
    if (!serie) {
      res.status(422).json({ message: 'Serie não encontrada!' })
      return
    }
  
    try {
      await Serie.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Serie removida com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })







module.exports = router