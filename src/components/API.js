import axios from 'axios';

const API = axios.create({
  baseURL: "https://ancient-shelf-92540.herokuapp.com",
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
});

export default API;