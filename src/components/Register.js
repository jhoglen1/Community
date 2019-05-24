import React from 'react';
import { withRouter } from "react-router-dom";
import { API_BASE_URL } from "../config";
import NavBar from './NavBar';





class Register extends React.Component {


 



   handleSubmit = e => {
    e.preventDefault();
   
   
   

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    let userName = e.currentTarget.userName.value;
    let passWord= e.currentTarget.passWord.value;
    let firstName= e.currentTarget.firstName.value;
    let lastName= e.currentTarget.lastName.value;
    e.currentTarget.reset();
    return fetch(`${API_BASE_URL}api/user`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        username: userName,
        password: passWord,
        firstname: firstName,
        lastname: lastName
       })
    })
      
      .then(res => {
        if (res.ok){
          return res.json();
           }
          
           throw new Error( alert("This user already exists"));
         
        
         


      })
      .then(res=> {
        window.location.href ="./MainPage"
      })

    
            .catch(err => {
        let message;
        if (err.code === 422) {
          message = err.message;
        } else if (err.code === 500) {
          message = "Internal server error";
        } else {
          message = "Something went wrong, please try again later";
        }
        return message
       
      
      });
    };
  
 

  
  render(){
        
      
    return (
      <div>
      <NavBar />
        <div className='register'>
      
          <h2>Create a profile</h2>
      
        
          <form className="registering" onSubmit={this.handleSubmit} >
         
          
        <label className="boxe">
           First Name:
            <input 
     name="firstName" type="text" required placeholder="First Name" /> 
      </label> <br/><br/>
      <label className="boxee">>
          Last Name: 
          <input 
          name="lastName"
      type="text" 
     required 
     placeholder="Last Name" />  
     </label><br/><br/>
     <label className="boxeee">
  User Name:
  <input 
  name="userName"
    type="text" 
     required
     placeholder="User Name" />    
     </label><br/><br/>
      <label className="boxes">>
      Password:  
       <input 
       name="passWord"
      type="password" 
     required 
     placeholder="Password" 
      />  </label> <br/><br/>
      <label className="boxes">>
          Password:
       <input 
      type="password" 
     required 
     placeholder="Verify Password" /> </label> <br/><br/>
      <button className="about" type="Submit" >Create</button>
     
      &nbsp;&nbsp;
      
     
      </form> 
     
    
      </div>
     
      </div>
    );
    }
  }

  export default withRouter (Register);
