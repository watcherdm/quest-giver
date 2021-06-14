const express = require('express')
const router = express.Router()

const setupAdventureRoute = ({Adventure, Scene}) => {

  console.log("Creating Adventure Routes");

  router.get('/', (req, res) => {
    Adventure.findAll()
      .then(adventures => res.json(adventures))
      .catch(err => res.status(400).json({noadventuresfound: 'No Adventures Found'}))
  })

  router.get('/:id', (req, res) => {
    Adventure.findOne({where: {public_id: req.params.id}})
      .then(adventure => res.json(adventure))
      .catch(err => res.status(404).json({noadventurefound: 'No Adventure Found'}))
  })

  router.post('/', (req, res) => {
    Adventure.create(req.body)
      .then(adventure => res.json({msg: 'Adventure added Successfully'}))
      .catch(err => res.status(500).json({error: 'Unable to add this adventure'}))
  })

  router.put('/:id', (req, res) => {
    Adventure.findByIdAndUpdate(req.params.id, req.body)
      .then(adventure => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

  router.delete('/:id', (req, res) => {
    Adventure.findByIdAndRemove(req.params.id, req.body)
      .then(adventure => res.json({ msg: 'Book entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a book' }));
  });

  router.get('/:id/scenes', (req, res) => {
    Scene.find({adventure: req.params.id})
      .then(scenes => res.json(scenes))
      .catch(err => res.status(400).json({error: err.message}))
  })
  return router
}


module.exports = setupAdventureRoute;