const express = require('express');
const router = express.Router();

const {takeOrder, seeOrder, deleteOrder, getCustomers, newCustomer, createRoom, assignClient, getAssignedClient} = require('../controllers/controller');

router.post('/Order', takeOrder);
router.get('/OrderList', seeOrder);
router.delete('/DeleteOrders', deleteOrder);
router.get('/GetCustomers', getCustomers);
router.post('/CreateCustomer', newCustomer);
router.post('/CreateRoom', createRoom);
router.put('/AssignClient', assignClient);
router.get('/GetAssignedClient', getAssignedClient);

module.exports = router;