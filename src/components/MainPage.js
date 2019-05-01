import React, {Component} from 'react';




class MainPage extends React.Component {

  goToHome= props =>{
    console.log("going to home page");
    this.props.history.push(`/`);
}
    render(){
       

      return (
          
     <div>
         <div id="container"></div>
         
       
         <h2>This is the main page</h2>
         <button onClick={this.goToHome}>home</button>
      </div>
    );
  }
  }
  
  export default MainPage;

  
  

  