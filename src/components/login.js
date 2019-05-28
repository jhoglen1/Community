import React from 'react';
import { API_BASE_URL } from "../config";
import NavBar from './NavBar'


export default function login() {

  
  

   
    
    
    const handleSubmit = e => {
        e.preventDefault();
        
        
              const headers = {
              "Content-Type": "application/json",
              Accept: "application/json"
            };
           
            let username = e.currentTarget.username.value;
            let password= e.currentTarget.password.value;
          
            return fetch(`${API_BASE_URL}api/authorize/login`, {
              method: "POST",
               headers,
              body: JSON.stringify({
                username: username,
                password: password,
              
               })
            
            })
          
              .then(res => {
                if (res.ok){
                  return res.json();
                   }
                  
                   throw new Error( window.confirm("Username/Password was enter incorrectly! Try again!"));
                
                
              })
              .then(res=>{
                  localStorage.setItem("authToken",res.authToken)
                  window.location.href="./MainPage"
                  

              })
            
                    .catch(err => {
                let message;
                if (err.code === 401) {
                 
                  message = err.message;
                  
                } else if (err.code === 500) {
                  message = "Internal server error";
                } else {
                  message = "Something went wrong, please try again later";
                }
                return message
               
              });
            };
            
            
      
          return(
          



        <div>
            <NavBar />
       
       
  <form className='login' onSubmit={handleSubmit} >
  
  
  
        <label htmlFor="username">Username</label> <br/> 
      
        <input id="username" name="username" type="text" /> <br/>
        <label htmlFor="password">Password</label> <br/>
        <input id="password" name="password" type="password" /> <br/>

        <br/>
       
           
            <button className="about" type="submit"> Submit </button>
        </form>
        
        </div>


    )
}