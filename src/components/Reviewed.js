import React  from 'react';






class Reviewed extends React.Component {
   

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
  event.currentTarget.reset();
 
  
};


    render(){
       

      return (
         
     <div>
         
         
            
        <form className="brews" onSubmit={this.createBrews}>
        <h3 className="rate">Review your brew</h3>
        <input name="UserName" ref={this.usernameRef} type="text"placeholder="User" required/><br/><br/>
        <input name="Date" ref={this.dateRef} type="text"placeholder="Month/Day/Year" required/><br/><br/>
        <input name="Brew Name" ref={this.brewRef} type="text"placeholder="Brew Name" required/><br/><br/>
      <input name="Brewery Name" ref={this.breweryRef} type="text"placeholder="Brewery Name"required/> <br/><br/>
      <input name="Brewery Location" ref={this.breweryLocationRef} type="text"placeholder="Brewery Location "required/> <br/><br/>
      <input name="Brew Style" ref={this.styleRef} type="text"placeholder="Brew Style"required/><br/><br/>
      
      <textarea name="Review" ref={this.reviewRef} placeholder="Review"required/>  <br/><br/>
      
      <button className="about" type="submit">Review</button>
      
       
      &nbsp;&nbsp;
        
         </form>
        
        
        
      </div>
    );
  }
  }
  
  export default Reviewed;

  
  