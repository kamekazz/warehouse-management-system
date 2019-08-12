import axios from 'axios';

export default axios.create({
  baseURL: `http://your_domin_name/jwtauth/api/`,//YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  }
});
