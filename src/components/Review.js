import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import NavBar from './NavBar';



class Review extends React.Component {

  goToHome= props =>{
    console.log("going to home page");
    this.props.history.push(`/`);
}
    render(){
       

      return (
         
         <div>
    
          <NavBar/>
         
          <div className="ReviewBox">
         <h1>Brew Reviews</h1>
          <br/>
          <br/>
          <br/>
        
          <button className="homes" onClick={this.goToHome}>home</button>
          </div>
          </div>
         
      );
      }
    }
export default withRouter (Review);