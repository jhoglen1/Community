import React from 'react';
import { withRouter } from "react-router-dom";




 class NavBar extends React.Component {



 
  
 
  goToHome= props =>{
    console.log("going to home page");
    this.props.history.push (`/`);
}

     render(){
        return (
          <div className="logo">
         <form className="NavH" onSubmit={this.handleSubmit}>
  
     <h1>Community Brews
   
     <button className="NavHome" type="button" onClick={this.goToHome}>Home</button>
     
    
     </h1>
  
   </form>
   </div>
      );
  }
}

export default withRouter(NavBar);



