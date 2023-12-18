const express = require('express');
const router = express.Router();
const randomController = require('../controller/randomNumberController');

router.get('/', randomController.getRandomResults);

module.exports = router;
