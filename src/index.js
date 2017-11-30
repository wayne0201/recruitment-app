import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch} from "react-router-dom";


import Register from './container/register/register';
import Login from './container/login/login';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo';
import AuthRoute from './component/authroute/authroute';
import Dashboard from './component/dashboard/dashboard';

import reducer from "./reducer";
import "./config";
import "./index.css"

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/geniusinfo' component={GeniusInfo}></Route>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>), 
    document.getElementById("root")
);
