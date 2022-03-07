import axios from 'axios';

const BASE_URL = 'https://webwiders.in/WEB01/QuickCash/Api/';


const Instance = axios.create({
    baseURL: BASE_URL
});

export default Instance;