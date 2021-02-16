import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-828d6-default-rtdb.firebaseio.com/'
});

export default instance;