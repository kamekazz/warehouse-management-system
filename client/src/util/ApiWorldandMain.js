import axios from 'axios';

export default axios.create({
  baseURL: `/webs/item`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json'
  }
});
