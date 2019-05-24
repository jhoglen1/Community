import React from 'react';
import Logout from './Logout';
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


 onDelete = (id) => {
 console.log("delete commit");
 const reviewsId = this.state.reviews
 reviewsId.splice(id,1)
 this.setState({reviews: reviewsId})



 const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  

};





return fetch(`${API_BASE_URL}brewery/:id`, {
  method: "DELETE",
  headers,
  
  body: JSON.stringify({
    })
  
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

componentWillMount(){
  let authToken = localStorage.getItem("authToken");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + authToken
    
  
  };
fetch(`${API_BASE_URL}api/protected`,{headers:headers})

.then(res=> {
  if (res.ok){
 return res.json();
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