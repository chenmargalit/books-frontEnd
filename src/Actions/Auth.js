import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../Types';
import api from '../Api';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = user => ({
    type: USER_LOGGED_OUT
});

export const login = credentials => dispatch => 
    api.user.login(credentials).then(user => {
        localStorage.bookwormJWT = user.token;
        dispatch(userLoggedIn(user))
}); 

export const logout = () => dispatch =>  {
        localStorage.removeItem('bookwormJWT');
        dispatch(userLoggedOut())
}; 

