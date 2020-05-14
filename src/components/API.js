import axios from 'axios';

export default axios.create({
  baseURL: 'https://ancient-shelf-92540.herokuapp.com',
  headers: { "Content-type": "application/json" }
});