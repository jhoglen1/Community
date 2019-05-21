
import React from 'react';
import { withRouter } from "react-router-dom";








 export class About extends React.Component  {



  goToRegister= props =>{
    console.log("going to register page");
    this.props.history.push(`/Register`);
}
goTologin= props =>{
    console.log("going to main page");
    this.props.history.push(`/login`);

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
     
  <div>
  
      
    
        <button className="about" onClick={this.goToRegister}>Register</button>
        <br/> <br/>
        <button className="about" onClick={this.goTologin}>Log In</button>
     
              </div>
              </div>


     
             

  );
}
 }

export default withRouter (About);