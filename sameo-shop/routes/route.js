const express = require('express');
const router = express.Router();

const {takeOrder, seeOrder, deleteOrder, getCustomers, newCustomer, createRoom, assignClient, getAssignedClient,
        announceOrder, sendMessage, getMessages, setAsReaded, deleteMessage, setOrderAsDone, isLocked,
        lockRoom, delockRoom, setOrderAsInPrep, newAdminMessage, getAdminMessage, deleteAdminMessage} = require('../controllers/controller');

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
router.get('/GetMsg', getMessages);
router.put('/Readed', setAsReaded);
router.delete('/DeleteMessage', deleteMessage);
router.put('/OrderDone', setOrderAsDone);
router.get('/IsLocked', isLocked);
router.put('/LockRoom', lockRoom);
router.put('/DelockRoom', delockRoom);
router.put('/OrderInPrep', setOrderAsInPrep);
router.post('/AdminMessage', newAdminMessage);
router.get('/GetAdminMessage', getAdminMessage);
router.delete('/DeleteAdminMessage', deleteAdminMessage);

module.exports = router;