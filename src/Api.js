import axios from 'axios';

export default {
    user: {
        login: credentinals => axios.post('/api/auth', { credentinals }).then(res => res.data.user)
    }
};