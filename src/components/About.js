
import React from 'react';
import { withRouter } from "react-router-dom";
import { API_BASE_URL } from "../config";







 export class About extends React.Component  {



  goToRegister= props =>{
    console.log("going to register page");
    this.props.history.push(`/Register`);
}
goToMainPage= props =>{
    console.log("going to main page");
    this.props.history.push(`/MainPage`);

}



getData(e){
    e.preventDefault();
   


  
    function data(e) {
   return(
    fetch(`${API_BASE_URL}/api/authorize/login`),{
        
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
         'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    
   
    body: JSON.stringify(data), // body data type must match "Content-Type" header
}

    
 .then(res => {
        if (!res.ok)  {
            return Promise.reject(res.statusText);
        }
        
        return res.json();
         
    })
    .then(MainPage =>
        this.setState({
            reviews: [],
          
        })
    )
    
    .catch(err =>
        this.setState({
            error: 'Could not load',
           
        })
        
    )
           );
    }


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
  <form onSubmit={e => this.getData(e)}>
        <label htmlFor="username">Username</label> <br/> 
      
        <input id="username" name="username" type="text" /> <br/>
        <label htmlFor="password">Password</label> <br/>
        <input id="password" name="password" type="password" /> <br/>

        <br/>
       
           
            <button className="about" type="submit"> Submit </button>
        </form>
   
      
     <br/>
        <button className="about" onClick={this.goToRegister}>Register</button>
     
     
              </div>
              </div>


     
             

  );
}
 }

export default withRouter (About);