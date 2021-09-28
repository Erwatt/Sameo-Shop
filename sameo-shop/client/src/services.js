import axios from 'axios';


const API_URL = "https://sameo-shop.herokuapp.com/api/";
// const API_URL = 'http://localhost:3001/api/';

class services {
    
    takeOrder(cart, customer){
        return axios
            .post(API_URL + 'Order', {cart, customer});
    };

    announceOrder(cart, customer){
        return axios
            .post(API_URL + 'AnnounceOrder', {cart, customer});
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

    signup(email, password, role){
        console.log("service")
        return axios
            .post(API_URL + 'signup', {email, password, role});
    };

    login(email, password){
        return axios
            .post(API_URL + 'login', {email, password})
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    };

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    };

    sendMessage(customer, message){
        return axios
            .post(API_URL + 'SendMessage', {customer, message});
    };

    getMessages(){
        return axios
            .get(API_URL + 'GetMsg');
    };

    setAsReaded(id){
        return axios
            .put(API_URL + 'Readed', {id});
    };

    deleteMessage(id){
        return axios
            .delete(API_URL + 'DeleteMessage', {data: {id}});
    };

    setOrderAsInPrep(id){
        return axios
            .put(API_URL + 'OrderInPrep', {id});
    };

    setOrderAsDone(id){
        return axios
            .put(API_URL + 'OrderDone', {id});
    };

    logout(){
        localStorage.removeItem('user');
    };
    
    isLocked(room){
        return axios
            .get(API_URL + 'IsLocked', {params: {room: room}});
    };

    lockRoom(room){
        return axios
            .put(API_URL + 'LockRoom', {room});
    };

    delockRoom(room){
        return axios
            .put(API_URL + 'DelockRoom', {room});
    };

    newAdminMessage(message, customer, isPopUp){
        return axios
            .post(API_URL + 'AdminMessage', {message, customer, isPopUp});
    };

    getAdminMessage(customer){
        return axios
            .get(API_URL + 'GetAdminMessage', {params: {customer: customer}});
    };

    deleteAdminMessage(id){
        console.log(id)
        return axios
            .delete(API_URL + 'DeleteAdminMessage', {data: {id}});
    };
};

export default new services();