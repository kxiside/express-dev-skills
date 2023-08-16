let express = require('express');
let router = express.Router();
let skillsCtrl = require('../controllers/skills')

// GET / skills
router.get('/', skillsCtrl.index)

// GET / skills/:id
router.get('/:id', skillsCtrl.show)

module.exports = router;
