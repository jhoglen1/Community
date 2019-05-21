import React from 'react';
import { withRouter } from "react-router-dom";




 class NavBar extends React.Component {




componentDidMount() {
  this.setState({
    authToken: false
  })
  
 
  }
  handleSubmit = e => {
    e.preventDefault()
    localStorage.removeItem("authToken");
    window.location.href ="./";
  }
  goToHome= props =>{
    console.log("going to home page");
    this.props.history.push (`/`);
}

     render(){
        return (
          <div className="logo">
         <form className="NavH" onSubmit={this.handleSubmit}>
  
     <h1>Community Brews
     <button className="NavHome" type="submit" onSubmit={this.handleSubmit}>log out</button>
     <button className="NavHome" type="button" onClick={this.goToHome}>Home</button>
     
    
     </h1>
  
   </form>
   </div>
      );
  }
}

export default withRouter(NavBar);



