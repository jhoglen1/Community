import React  from 'react';
import { API_BASE_URL } from "../config";





class Reviewed extends React.Component {



   handleSubmit = e => {
    e.preventDefault();
   
   
   

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    let UserName = e.currentTarget.UserName.value;
    let Date= e.currentTarget.Date.value;
    let BrewName= e.currentTarget.BrewName.value;
    let BreweryName= e.currentTarget.BreweryName.value;
    let BreweryLocation= e.currentTarget.BreweryLocation.value;
    let BrewStyle= e.currentTarget.BrewStyle.value;
    let Review= e.currentTarget.Review.value;
   
    

    return fetch(`${API_BASE_URL}brewery`, {
      method: "POST",
      headers,
      body: JSON.stringify({
      
        User: UserName,
        Date: Date,
        Brew: BrewName,
        Brewery: BreweryName,
        BreweryLocation: BreweryLocation,
        Style: BrewStyle,
        Review: Review
       })
    })
      
      .then(res => {
        return res.json();
      })
      .then(res=> console.log(res))
    
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
  
   

dateRef = React.createRef();
usernameRef = React.createRef();
brewRef = React.createRef();
breweryRef = React.createRef();
breweryLocationRef = React.createRef();
styleRef = React.createRef();
statusRef = React.createRef();
reviewRef = React.createRef();


createBrews = event =>{
  
  event.preventDefault();  
 
 console.log('this.breweryRef.input.value',this.brewRef.current.value);
  const brew ={
    
    User: this.usernameRef.current.value, 
    Date: this.dateRef.current.value,
    Brew: this.brewRef.current.value,
    Brewery: this.breweryRef.current.value,
    BreweryLocation: this.breweryLocationRef.current.value,
    Style: this.styleRef.current.value,
    Review: this.reviewRef.current.value,
   
   
  }
  
  console.log(brew);
  this.props.addReviews(brew);
  
 
  
};
componentWillMount(){
  console.log("worked");
   }



    render(){
       

      return (
         
     <div>
         
         
            
        <form className="brews" onSubmit={this.createBrews}>
        <form className="brews" onSubmit={this.handleSubmit}>
        <h3 className="rate">Review your brew</h3>
        <input name="UserName" ref={this.usernameRef} type="text"placeholder="User" required/><br/><br/>
        <input name="Date" ref={this.dateRef} type="text"placeholder="Month/Day/Year" required/><br/><br/>
        <input name="BrewName" ref={this.brewRef} type="text"placeholder="Brew Name" required/><br/><br/>
      <input name="BreweryName" ref={this.breweryRef} type="text"placeholder="Brewery Name"required/> <br/><br/>
      <input name="BreweryLocation" ref={this.breweryLocationRef} type="text"placeholder="Brewery Location "required/> <br/><br/>
      <input name="BrewStyle" ref={this.styleRef} type="text"placeholder="Brew Style"required/><br/><br/>
      
      <textarea name="Review" ref={this.reviewRef} placeholder="Review"required/>  <br/><br/>
      
      <button className="about" type="submit">Review</button>
      
       
      &nbsp;&nbsp;
        
         </form>
         </form>
        
        
        
      </div>
    );
  }
  }
  
  export default Reviewed;

  
  