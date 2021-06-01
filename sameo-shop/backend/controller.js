const Order = require('./models/order');


exports.takeOrder = (req, res) => {
    console.log('coucou')
    console.log(req.body);
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