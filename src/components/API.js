import axios from 'axios';

const API = axios.create({
  baseURL: "https://ancient-shelf-92540.herokuapp.com",
});

export default API;