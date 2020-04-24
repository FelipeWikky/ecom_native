import axios from 'axios';

export default axios.create({
  baseURL:'http://localhost:3000'
 // baseURL:'http://example-ecommerce.herokuapp.com/'
});