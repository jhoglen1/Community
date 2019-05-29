import React from 'react';
import Logout from './Logout';

import { API_BASE_URL } from "../config";




class App extends React.Component {

  goToReview= props =>{
    console.log("going to home page");
    this.props.history.push(`/Review`);
  }

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

 state = {
  reviews:[]
}

 handleSubmit= (beerid)=> {
 console.log("delete commit");
 let brewPost = this.state.reviews
 brewPost.splice(beerid,1)
 console.log(beerid)
 this.setState({
 
   id: beerid
  });
 
 
 
  const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
  };
 
return fetch(`${API_BASE_URL}brewery/${beerid}`, {
  method: "DELETE",
  headers: headers,
  
   body: JSON.stringify({
     
   
    id: beerid
    })
  
})

.then(res=>{})
.then(res=> {})
.catch(err =>console.log(err))

}



 

componentWillMount(){
  let authToken = localStorage.getItem("authToken");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + authToken
    
  
  };
fetch(`${API_BASE_URL}api/protected`,{headers:headers})

.then(res=> {
  if (res.ok){
 return res.json( );
  }
 
  throw new Error(  window.location.href ="./");

})

.then(res=> {
  
  console.log(res);
})

.catch(err =>console.log(err))

}
 


state = {
  reviews:[]
}

componentDidMount() {
  
  this.addBeers();
}

addBeers() {
  this.setState({
      error: null,
      loading: true
  });
  fetch(`${API_BASE_URL}brewery`)
  
      .then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText);
          }
          return res.json();
      })
      .then(addBeers =>{
       
          this.setState({
              reviews: addBeers,
              loading: false
          })
          
        })
      .catch(err =>
        
          this.setState({
              error: 'Could not load ',
              loading: false
          })
      );
}
 


    
    render() {
     

   

    
    
    
    return (
      <div className="CommunityBrews">
   <div className="appForm">
    <Logout />
    </div>


     
    <ul className="reviews">
   <h1>Brew Reviews</h1>
   <button className="again" onClick={this.goToReview}>Review Again</button>
    {this.state.reviews.map(beer => {
      
      return(
       
        <ul className="brewList">
        <li> {beer.Date} </li><br/><br/>
       <li>{beer.User}</li> <br/><br/>
       <li>Brew Name: {beer.Brew} </li><br/><br/>
       <li>Brewery Name: {beer.Brewery}</li><br/><br/>
       <li> Style of Beer: {beer.Style}</li><br/><br/>
       <li> Review: {beer.Review}</li><br/><br/>
       
       
       
      
       <button className="about"  onClick={() => this.handleSubmit(beer.id)}>Delete</button>
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