import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-37b24.firebaseio.com/'
});

export default instance;