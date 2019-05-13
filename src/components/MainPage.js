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
         
     <div>
         
         
    
        
      </div>
    );
  }
  }
  
  export default MainPage;

  
  

  