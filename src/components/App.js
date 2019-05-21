import React from 'react';
import NavBar from './NavBar';
import Review from './Review';
import { API_BASE_URL } from "../config";



class App extends React.Component {

  onSubmit (event) {
    event.preventDefault();
  }
 
  
  state = {

    reviews:[]
  };
 addReviews = brews => {
   console.log('adding brews');
  let theReviews = this.state.reviews
   theReviews.push(brews);
   this.setState({
     reviews: theReviews
   });

 };


 onDelete = (i) => {
 console.log("delete commit");
 const id = this.state.reviews
 id.splice(i,1)
 this.setState({reviews: id})

 const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  

};





return fetch(`${API_BASE_URL}brewery/:id`, {
  method: "DELETE",
  headers,
  
  body: JSON.stringify({
    id: "" })
  
})

.then(res => {
 
})
.then(res=> {
  
})


.catch(err => {
  let message;
  if (err.code === 422) {
    message = err.message;
  } else if (err.code === 500) {
    message = "Internal server error";
  } else {
    message = "Something went wrong, please try again later";
  }
  return message
  
   
  });
};






    
    render() {
      
     
   

   
    
    
    return (
      <div className="CommunityBrews">
   <div className="appForm">
    <NavBar />
    </div>
 <Review  addReviews={this.addReviews} />

     
    <ul className="reviews">
   <h1>Brew Reviews</h1>
    
    {this.state.reviews.map(beers => {
      
      return(
       
        <ul className="brewList">
        <li> {beers.Date} </li><br/><br/>
       <li>{beers.User}</li> <br/><br/>
       <li>Brew Name: {beers.Brew} </li><br/><br/>
       <li>Brewery Name: {beers.Brewery}</li><br/><br/>
       <li>Brewery Location : {beers.BreweryLocation}</li><br/><br/>
       <li> Style of Beer: {beers.Style}</li><br/><br/>
       <li> Review: {beers.Review}</li><br/><br/>
      
       <button  onClick={(this.onDelete)} className="delete" >Delete</button>
       <br/><br/><br/>
       </ul>
        
       
      )
     
    })
    
    }
    

 
   

  
   </ul>

  
        
         
       
         
       
         
             </div>
  );
}
}

export default App;