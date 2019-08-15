import axios from './Api';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + token;
  } else {
    delete axios.defaults.headers.common['authorization'];
  }
};

export default setAuthToken;
