import React from 'react';
import Reviewed from './Reviewed';





class Review extends React.Component {
 

 
    render(){
           return (
         
         <div className="beers">
         
         <Reviewed addReviews={this.props.addReviews}/>
        
       
          </div>
         
      );
      }
    }
export default Review;