import axios from 'axios';

export default axios.create({
  baseURL: `/api`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json'
  }
});
