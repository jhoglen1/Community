import React from 'react';






class MainPage extends React.Component {


  goToHome= props =>{
    this.props.history.push(`/`);
}
goToReview= props =>{
  this.props.history.push(`/Reviewed`);
}


  
    render(){
       

      return (
         
     <div >
        
       
      </div>
    );
  }
  }
  
  export default MainPage;