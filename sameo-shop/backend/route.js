const express = require('express');
const router = express.Router();

const {takeOrder, seeOrder, deleteOrder} = require('./controller');

router.post('/Order', takeOrder);
router.get('/OrderList', seeOrder);
router.delete('/DeleteOrders', deleteOrder);

module.exports = router;