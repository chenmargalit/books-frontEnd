import { userLoggedIn } from "./Auth";
import api from '../Api';


export const signup = data => (dispatch) =>
 api.user.signup(data).then(user => dispatch(userLoggedIn(user))); 