import React, {  useState} from 'react';

import { API_BASE_URL } from "../config";
import NavBar from './NavBar';





export default function Register() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  
 



  const handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    return fetch(`${API_BASE_URL}api/user`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName
       })
    })
      
      .then(res => {
        return res.json();
      })
      .then(res=>console.log(res))
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
  
  
    

  
        
      
    return (
      <div>
      <NavBar />
        <div className='register'>
      
          <h2>Create a profile</h2>
      
        
          <form className="registering" onSubmit={handleSubmit}>
        <label>
           First Name:
            <input 
      type="text" 
     required 
     placeholder="First Name" /> 
      </label> <br/><br/>
      <label>
          Last Name: 
          <input 
      type="text" 
     required 
     placeholder="Last Name" />  
     </label><br/><br/>
     <label>
  User Name:
  <input 
    type="text" 
     required
     placeholder="User Name" />    
     </label><br/><br/>
      <label>
          Password:
       <input 
      type="password" 
     required 
     placeholder="Password" 
      />  </label> <br/><br/>
      <label>
          Password:
       <input 
      type="password" 
     required 
     placeholder="Verify Password" /> </label> <br/><br/>
      <button className="about" type="Submit">Create</button>
      &nbsp;&nbsp;
     
      </form> 
    
      </div>
     
      </div>
    );
  }


