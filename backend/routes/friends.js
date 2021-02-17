const router = require('express').Router();
let Friends = require('../models/friends.model');

router.route('/').get((req, res) => {
  Friends.find()
    .then(friends => res.json(friends))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').get((req, res) => {
  Friends.findById(req.params.id)
    .then(friend => res.json(friend))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;