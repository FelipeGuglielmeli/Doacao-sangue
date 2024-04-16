const express = require('express');
const router = express.Router();
const doadorController = require('../controllers/doadores');

router.post('/', doadorController.addDoador);

module.exports = router;
