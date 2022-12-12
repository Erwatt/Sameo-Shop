const Order = require('../models/order');
const Customer = require('../models/customer');
const Room = require('../models/room');
const Message = require('../models/message');
const Nodemailer = require('nodemailer');
const AdminMessage = require('../models/adminMessage');
const customer = require('../models/customer');

exports.takeOrder = (req, res) => {
    let {cart, customer} = req.body;
    console.log(cart)
    cart.map(({name, price, amount}) => {
        console.log(price)
        const order = new Order({
            name: name,
            price: price,
            amount: amount,
            customer: customer,
            isReceived: false,
            done: false
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

exports.announceOrder = (req, res) => {
    let {cart, customer} = req.body;
    console.log(cart)
    var txt = ''
    cart.map(({name, amount}) => {
        txt += (name + " x " + amount + "                      ")
    })
    const transporter = Nodemailer.createTransport({
        service: 'ionos',
        host: 'smtp.ionos.fr',
        auth: {
          user: process.env.SENDER,
          pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.SENDER,
        to: process.env.RECEIVER,
        subject: "Nouvelle Commande",
        html: ` nouvelle commande de ${customer}: ${txt}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(500).json({
            message: "Impossible d'envoyer le courriel",
          })
        } else {
          res.status(200).json({
            success: true,
            message: `Courriel envoyé`
          })
          console.log('Email sent: ' + info.response);
        }
    });
};

exports.getAssignedClient = (req, res) => {
    const name = req.query.name;
    // console.log(name)
    Room.findOne({name: name})
        .then(client => res.status(200).json(client))
        .catch(error => res.status(400).json({error}));
};

exports.getMessages = (req, res) => {
    Message.find()
        .then((messages) => res.status(200).json(messages))
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

exports.deleteCustomer = (req, res) => {
    const customer = req.body.customer;
    console.log("client supprimé" + customer)
    Customer.deleteOne({name: customer})
        .then(() => res.status(200).json({message: "Client supprimé"}))
        .catch(error => res.status(400).json({error}));
}

exports.createRoom = (req, res) => {
    let {name, client} = req.body;
    const room = new Room({
        name: name,
        client: client,
        isLocked: false
    });
    room.save()
        .then(() => res.status(201).json({message:'Salle crée'}))
        .catch(error => res.status(400).json({error}));
};

exports.isLocked = (req, res) => {
    const room = req.query.room;
    Room.findOne({name: room})
        .then(room => res.status(200).json(room))
        .catch(error => res.status(400).json({error}));
};

exports.lockRoom = (req, res) => {
    let room = req.body.room;
    Room.updateOne({name: room}, {isLocked: true, name: room})
        .then(() => res.status(200).json({message:'Salle vérouilléé'}))
        .catch(error => res.status(400).json({error}));
};

exports.delockRoom = (req, res) => {
    let room = req.body.room;
    Room.updateOne({name: room}, {isLocked: false, name: room})
        .then(() => res.status(200).json({message:'Salle dévérouilléé'}))
        .catch(error => res.status(400).json({error}));
};

exports.assignClient = (req, res) => {
    let {name, client} = req.body;
    console.log(client)
    Room.updateOne({name: name}, {client: client, name: name})
        .then(() => res.status(200).json({message:'Client modifié'}))
        .catch(error => res.status(400).json({error}));
};

exports.sendMessage = (req, res) => {
    // console.log('coucou')
    let {customer, message} = req.body;
    const msg = new Message({
        customer: customer,
        object: "Nouveau message de" + customer,
        message: message,
        is_New: true
    });
    const transporter = Nodemailer.createTransport({
        service: 'ionos',
        host: 'smtp.ionos.fr',
        auth: {
          user: process.env.SENDER,
          pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.SENDER,
        to: process.env.RECEIVER,
        subject: `Nouveau message de ${customer}`,
        html: `${message}`
    };

    transporter.sendMail(mailOptions);

    msg.save()
        .then(() => res.status(201).json({message: 'Message créé et envoyé'}))
        .catch(error => res.status(400).json({error}));
};

exports.setAsReaded = (req, res) => {
    const id = req.body.id;
    // console.log(id)

    Message.updateOne({ _id: id }, { ...req.body, is_New: false})
        .then(() => res.status(200).json({message: "Message marqué comme lu"}))
        .catch(error => res.status(400).json({error}));
};

exports.deleteMessage = (req, res) => {
    const id = req.body.id;
    Message.deleteOne({ _id: id})
        .then(() => res.status(200).json({message: "Message supprimé"}))
        .catch(error => res.status(400).json({error}));
};

exports.setOrderAsDone = (req, res) => {
    const id = req.body.id;
    Order.updateOne({ _id: id}, {...req.body, done: true})
        .then(() => res.status(200).json({message: "Commande executé"}))
        .catch(error => res.status(400).json({error}));
};

exports.setOrderAsInPrep = (req, res) => {
    const id = req.body.id;
    Order.updateOne({_id: id}, {...req.body, isReceived: true})
        .then(() => res.status(200).json({message: "Commande en préparation"}))
        .catch(error => res.status(400).json({error}));
};

exports.newAdminMessage = (req, res) => {
    let {message, customer, isPopUp} = req.body;
    const admMsg = new AdminMessage({
        message: message,
        customer: customer,
        isPopUp: isPopUp
    });
    admMsg.save()
        .then(() => res.status(201).json({message: "Message sauvegardé"}))
        .catch(error => res.status(400).json({error}));
};

exports.getAdminMessage = (req, res) => {
    AdminMessage.find()
        .then(admMessage => res.status(200).json(admMessage))
        .catch(error => res.status(400).json({error}));
};

exports.deleteAdminMessage = (req, res) => {
    const id = req.body.id;
    // console.log(id);
    AdminMessage.deleteOne({ _id: id})
        .then(() => res.status(200).json({message: 'Message supprimé'}))
        .catch(error => res.status(400).json({error}));
};