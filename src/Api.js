import axios from 'axios';

export default {
    user: {
        login: credentinals => axios.post('/api/auth', { credentinals }).then(res => res.data.user),
        signup: user => 
        axios.post('api/users', { user }).then(res => res.data.user)
    }
};