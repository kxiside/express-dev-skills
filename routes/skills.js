let express = require('express');
let router = express.Router();
let skillsCtrl = require('../controllers/skills')

// GET / skills
router.get('/', skillsCtrl.index)

// GET /skills/new
router.get('/new', skillsCtrl.new)

// GET /skills/:id
router.get('/:id', skillsCtrl.show)

// POST /skills
router.post('/', skillsCtrl.create)

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete)

module.exports = router;
