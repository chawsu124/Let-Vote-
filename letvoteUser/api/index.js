import axios from 'axios'
const instance = () => axios.create({
    baseURL: 'http://localhost:9991/api/v1/'
});
export default instance;