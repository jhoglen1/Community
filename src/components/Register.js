import React, { Component } from 'react';
import { withRouter } from "react-router-dom";





class Register extends Component {
  
  goToHome= props =>{
    console.log("going to home page");
    this.props.history.push (`/`);
}
  render() {
        
      
    return (
        <div className='register'>
          <h2>Create a profile</h2>
      
        
        <form className="Registering" >
        <label>
           First Name:
            <input 
      type="text" 
     required /> 
      </label> <br/><br/>
      <label>
          Last Name:
          <input 
      type="text" 
     required />  </label> <br/><br/>
     <label>
         User Name:
   
        <input 
      type="text" 
     required />    
     </label><br/><br/>
      <label>
          Password:
      <input 
      type="text" 
     required 
     
      />  </label> <br/><br/>
      <label>
          Verify Password:
       <input 
      type="text" 
     required 
    
      /> </label> <br/><br/>
      <button type="submit">Sign up </button>
      <button onClick={this.goToHome}>Back</button> 
      </form>
     
      </div>
    );
  }
}

export default withRouter (Register);