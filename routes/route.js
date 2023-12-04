const express = require('express');
const router = express.Router();
const controller = require('../controller/conroller')

router.get('/check',controller.getcontroller);

module.exports = router;