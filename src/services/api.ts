import axios from 'axios';

export default axios.create({
  // baseURL:'http://192.168.0.102:3000'
  baseURL: 'http://example-ecommerce.herokuapp.com',
  headers: {
    Accept: 'application/json'
  }
});