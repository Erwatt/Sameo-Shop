import axios from 'axios';

const API_URL = 'http://localhost:3001/api/';

class services {
    takeOrder(cart){
        return axios
            .post(API_URL + 'Order', cart)
    }
}

export default new services();