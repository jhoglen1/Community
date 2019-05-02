
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import Register from './Register';
import MainPage from './MainPage';



 class About extends React.Component  {
  goToRegister= props =>{
    console.log("going to register page");
    this.props.history.push(`/Register`);
}
goToMainPage= props =>{
    console.log("going to main page");
    this.props.history.push(`/MainPage`);
}
   render(){
  return (
     <div className ="info">
      <header className="App-header">
          <h2>
         Welcome to <div className="logo1">Community Brews</div>
        </h2>
       </header>
    
      <p> This is a community where you can come and talk <br/> 
      about your recent brews you have tried. The good, bad  <br/>
      and ugly reviews are welcome. This is a friendly message <br/>
      board and any inappropriate language  will not be tolerated. <br/>
      </p>
     
      <h2>Cheers!</h2>
     
  <nav>
    <form className="LogIn" >
       <input 
      type="text" 
     required 
      placeholder="Username" 
      /><br/><br/>
      <input 
      type="text" 
     required 
      placeholder="Password" 
      />
      <br/><br/>
        <button className="about" onClick={this.goToMainPage}>Log in</button>
        &nbsp;&nbsp;
        
        <button className="about" onClick={this.goToRegister}>Register</button>
      </form>
     
              </nav>


     
             
 </div>
  );
}
 }
export default withRouter (About);