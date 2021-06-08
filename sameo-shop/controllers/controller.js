const Order = require('../models/order');
const Customer = require('../models/customer');
const Room = require('../models/room');

exports.takeOrder = (req, res) => {
    let {cart, customer} = req.body;
    console.log(cart)
    cart.map(({name, price, amount}) => {
        console.log(price)
        const order = new Order({
            name: name,
            price: price,
            amount: amount,
            customer: customer
        });

        order.save()
        .then(() => res.status(201).json({message: 'Commande enregistrée'}))
        .catch(error => res.status(400).json({error}));
    });   
}

exports.seeOrder = (req, res) => {
    // console.log('coucou')
    // const customer = req.body;
    // console.log(customer)

    Order.find()
        .then(orders => res.status(200).json(orders))
        .catch(error => res.status(400).json({error}));
        
};

exports.getAssignedClient = (req, res) => {
    const name = req.query.name;
    // console.log(name)
    Room.findOne({name: name})
        .then(client => res.status(200).json(client))
        .catch(error => res.status(400).json({error}));
};

exports.deleteOrder = (req, res) => {
    const customer = req.body.customer;
    console.log(customer)
    Order.deleteMany({customer: customer})
        .then(() => res.status(200).json({message:'Commandes supprimées'}))
        .catch(error => res.status(200).json({error}));
};

exports.getCustomers = (req, res) => {
    Customer.find()
        .then(customers => res.status(200).json(customers))
        .catch(error => res.status(400).json({error}));
};

exports.newCustomer = (req, res) => {
    let {name, firstname} = req.body;
    console.log(name)
    const customer = new Customer({
        name: name,
        firstname: firstname
    });
    customer.save()
        .then(() => res.status(201).json({message: 'Client créé'}))
        .catch(error => res.status(400).json({error}));
};

exports.createRoom = (req, res) => {
    let {name, client} = req.body;
    const room = new Room({
        name: name,
        client: client
    });
    room.save()
        .then(() => res.status(201).json({message:'Salle crée'}))
        .catch(error => res.status(400).json({error}));
};

exports.assignClient = (req, res) => {
    let {name, client} = req.body;
    console.log(client)
    Room.updateOne({name: name}, {client: client, name: name})
        .then(() => res.status(200).json({message:'Client modifié'}))
        .catch(error => res.status(400).json({error}));
};