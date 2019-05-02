import React, {Component} from 'react';
import NavBar from './NavBar';
import Review from './Review'



class MainPage extends React.Component {

  goToHome= props =>{
    console.log("going to home page");
    this.props.history.push(`/`);
}
goToReview= props =>{
  console.log("going to Review page");
  this.props.history.push(`/Review`);
}
    render(){
       

      return (
         
     <div>
          <NavBar/>
         
            
        <form className="brews" >
        <h3 className="rate">Review your brew</h3>
        <label>
           Brewery: &nbsp;&nbsp;
            <input 
      type="text" 
     required /> 
      </label> <br/><br/>
      <label>
          Brew Name: &nbsp;&nbsp;
          <input 
      type="text" 
     required />  </label> <br/><br/>
     <label>
         Brew Style: &nbsp;&nbsp;
   
        <input 
      type="text" 
     required />    
     </label><br/><br/>
      <label>
          Rate 1-10: &nbsp;&nbsp;
      <input 
      type="number" 
     required 
     
      />  </label> <br/><br/>
      <label>
          Review: &nbsp;&nbsp;
       <input 
      type="text" 
     required 
    
      /> </label> <br/><br/>
      <button className="homes"  onClick={this.goToReview}>Review</button>
       
      &nbsp;&nbsp;
         <button className="homes" onClick={this.goToHome}>home</button>
         </form>
      </div>
    );
  }
  }
  
  export default MainPage;

  
  

  