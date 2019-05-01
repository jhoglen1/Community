import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import Register from './Register';
import MainPage from './MainPage';





 class NavBar extends React.Component {
   
    
    goToRegister= props =>{
        console.log("going to home page");
        this.props.history.push(`/Register`);
    }
    goToMainPage= props =>{
        console.log("going to home page");
        this.props.history.push(`/MainPage`);
    }
     render(){
        return (
    <nav>
    <form className="LogIn" >
       <input 
      type="text" 
     required 
      placeholder="Username" 
      />  {""}
      <input 
      type="text" 
     required 
      placeholder="Password" 
      />
        <button onClick={this.goToMainPage}>log in</button>
      </form>
      <button onClick={this.goToRegister}>Register</button>
              </nav>
              
      );
  }
}

export default withRouter (NavBar);



