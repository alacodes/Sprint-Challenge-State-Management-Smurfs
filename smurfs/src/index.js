import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import "./index.css";
import App from "./components/App";
import {reducer} from './reducer';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
