import React from 'react';






class MainPage extends React.Component {


  goToHome= props =>{
    console.log("going to home page");
    this.props.history.push(`/`);
}
goToReview= props =>{
  console.log("going to home page");
  this.props.history.push(`/Review`);
}


  
    render(){
       

      return (
         
     <div className="buttons">
         <form>
         <button className="jeff" onClick={this.gotoReview}>Review Agagin</button>
         </form>
       
      </div>
    );
  }
  }
  
  export default MainPage;

  
  

  