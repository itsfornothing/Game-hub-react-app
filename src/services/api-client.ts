import  axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '93a2470191c34b3cb8f4956de41fbcb0'
    }
})