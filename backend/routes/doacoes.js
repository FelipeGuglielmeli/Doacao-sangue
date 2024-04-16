const express = require('express');
const router = express.Router();
const doacaoController = require('../controllers/doacoes');

router.post('/', doacaoController.addDoacao);
router.get('/', doacaoController.listDoacoes);

module.exports = router;
