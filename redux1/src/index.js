import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));




/*
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from '../reducer';

const  createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>, document.getElementById('root'));

*/
