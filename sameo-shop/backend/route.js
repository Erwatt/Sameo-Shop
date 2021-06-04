const express = require('express');
const router = express.Router();

const {takeOrder, seeOrder, deleteOrder, getCustomers, newCustomer} = require('./controller');

router.post('/Order', takeOrder);
router.get('/OrderList', seeOrder);
router.delete('/DeleteOrders', deleteOrder);
router.get('/GetCustomers', getCustomers);
router.post('/CreateCustomer', newCustomer);

module.exports = router;