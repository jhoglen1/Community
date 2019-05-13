import React from 'react';
import NavBar from './NavBar';
import Review from './Review';




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
 console.log("delte commit");
 const del = this.state.reviews
 del.splice(i,1)
 this.setState({reviews: del})

 
};
    
    render() {
      
     
   

   
    
    
    return (
      <div className="CommunityBrews">
   <div className="appForm">
    <NavBar/>
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