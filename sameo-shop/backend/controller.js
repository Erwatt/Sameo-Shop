const Order = require('./models/order');


exports.takeOrder = (req, res) => {
    const orderList = req.body;
    orderList.map(({name, price, amount}) => {
        console.log(price)
        const order = new Order({
            name: name,
            price: price,
            amount: amount
        });

        order.save()
        .then(() => res.status(201).json({message: 'Commande enregistrée'}))
        .catch(error => res.status(400).json({error}));
    });   
}

exports.seeOrder = (req, res) => {
    // console.log('coucou')
    Order.find()
        .then(orders => res.status(200).json(orders))
        .catch(error => res.status(400).json({error}));
        
};

exports.deleteOrder = (req, res) => {
    Order.deleteMany()
        .then(() => res.status(200).json({message:'Commandes supprimées'}))
        .catch(error => res.status(200).json({error}));
};