import React from 'react';
import Reviewed from './Reviewed';
import Logout from './Logout';





class Review extends React.Component {
 



 
    render(){
           return (
         
         <div className="beers">
         <Logout />
         <Reviewed addReviews={this.props.addReviews}/>
        
       
          </div>
         
      );
      }
    }
export default Review;