const express = require('express');
const { validatePan } = require('../controllers/panController')
const router = express.Router();

router.post('/validate-pan', validatePan);

module.exports = router;
