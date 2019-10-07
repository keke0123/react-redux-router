import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import todoApp from './store/reducers'
// redux-saga
import createSagaMiddleware from 'redux-saga';
import mySaga from './store/saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(todoApp, applyMiddleware(sagaMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// saga run
sagaMiddleware.run(mySaga);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
