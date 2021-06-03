import axios from 'axios';

const API_URL = 'http://localhost:3001/api/';

class services {
    takeOrder(cart){
        return axios
            .post(API_URL + 'Order', cart);
    };

    seeOrder(){
        return axios
            .get(API_URL + 'OrderList');
    };

    deleteOrder(){
        return axios
            .delete(API_URL + 'DeleteOrders');
    };
};

export default new services();