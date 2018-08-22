import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import rootReducer from './RootReducer';
import { userLoggedIn } from './Actions/Auth';

const store = createStore(rootReducer,
     composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.bookwormJWT) {
    const user = { token: localStorage.bookwormJWT };
    store.dispatch(userLoggedIn(user));
}

console.log(store.getState());

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<Route component={App} />
</Provider>
</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
