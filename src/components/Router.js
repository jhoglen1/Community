import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import MainPage from './MainPage';
import Register from './Register';
import NotFound from './NotFound';
import Review from './Review'


const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component ={App} />
        <Route exact path="/MainPage/" component={MainPage} />
        <Route exact path="/Register/" component={Register} />
        <Route exact path="/Review/" component={Review} />
        <Route component={NotFound} />       
    </Switch>
    </BrowserRouter>
);

export default Router;