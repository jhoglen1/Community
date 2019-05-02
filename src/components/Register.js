import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import MainPage from './MainPage';




class Register extends Component {
  
  goToHome= props =>{
    console.log("going to home page");
    this.props.history.push (`/`);
}
goToMainPage= props =>{
  console.log("going to main page");
  this.props.history.push(`/MainPage`);
}
  render() {
        
      
    return (
        <div className='register'>
          <h2>Create a profile</h2>
      
        
        <form className="Registering" >
        <label>
           First Name:&nbsp;&nbsp;
            <input 
      type="text" 
     required 
     placeholder="First Name" /> 
      </label> <br/><br/>
      <label>
          Last Name:&nbsp;&nbsp;
          <input 
      type="text" 
     required 
     placeholder="Last Name" />  </label> <br/><br/>
     <label>
         User Name:&nbsp;&nbsp;
   
        <input 
      type="text" 
     required
     placeholder="User Name"  />    
     </label><br/><br/>
      <label>
          Password:&nbsp;&nbsp;
      <input 
      type="text" 
     required 
     placeholder="Password" 
      />  </label> <br/><br/>
      <label>
          Verify Password:&nbsp;&nbsp;
       <input 
      type="text" 
     required 
     placeholder="Verify Password" 
    
      /> </label> <br/><br/>
      <button className="about" onClick={this.goToMainPage}>Create</button>
      &nbsp;&nbsp;
      <button className="about" onClick={this.goToHome}>Back</button> 
      </form>
     
      </div>
    );
  }
}

export default withRouter (Register);