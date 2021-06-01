const express = require('express');
const router = express.Router();

const {takeOrder} = require('./controller');

router.post('/Order', takeOrder);

module.exports = router;