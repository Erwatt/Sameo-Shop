import axios from 'axios';

// const API_URL = "https://sameo-shop.herokuapp.com/api/";
const API_URL = 'http://localhost:3001/api/';

class services {
    takeOrder(cart, customer){
        return axios
            .post(API_URL + 'Order', {cart, customer});
    };

    seeOrder(){
        return axios
            .get(API_URL + 'OrderList');
    };

    deleteOrder(customer){
        return axios
            .delete(API_URL + 'DeleteOrders', {data: {customer}});
    };

    getCustomers(){
        return axios
            .get(API_URL + 'GetCustomers');
    };

    newCustomer(name, firstname){
        return axios
            .post(API_URL + 'CreateCustomer', {name, firstname});
    };

    createRoom(name, client){
        return axios
            .post(API_URL + 'CreateRoom', {name, client});
    };

    assignClient(name, client){
        return axios
            .put(API_URL + 'AssignClient', {name, client});
    };

    getAssignedClient(name){
        return axios
            .get(API_URL + 'GetAssignedClient', {params : {name: name}});
    };
};

export default new services();