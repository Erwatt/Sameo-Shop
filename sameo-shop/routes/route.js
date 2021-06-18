const express = require('express');
const router = express.Router();

const {takeOrder, seeOrder, deleteOrder, getCustomers, newCustomer, createRoom, assignClient, getAssignedClient, announceOrder, sendMessage} = require('../controllers/controller');
const {signup, login} = require('../controllers/userController');


router.post('/signup', signup);
router.post('/login', login);

router.post('/Order', takeOrder);
router.get('/OrderList', seeOrder);
router.delete('/DeleteOrders', deleteOrder);
router.get('/GetCustomers', getCustomers);
router.post('/CreateCustomer', newCustomer);
router.post('/CreateRoom', createRoom);
router.put('/AssignClient', assignClient);
router.get('/GetAssignedClient', getAssignedClient);
router.post('/AnnounceOrder', announceOrder);
router.post('/SendMessage', sendMessage);

module.exports = router;