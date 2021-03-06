import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './About';
import App from './App';
import Register from './Register';
import NotFound from './NotFound';
import MainPage from "./MainPage";
import login from './login';
import Reviewed from './Reviewed';



const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component ={About} />
        <Route exact path="/MainPage/" component={App} />
        <Route exact path="/Register/" component={Register} />
        <Route exact path="/login/" component={login} />
        <Route exact path="/Reviewed/" component={Reviewed} />
        <Route exact path="/api/protected" component={App} />
        <Route exact path="/api/user" component={MainPage} />
        <Route component={NotFound} />       
    </Switch>
    </BrowserRouter>
);

export default Router;