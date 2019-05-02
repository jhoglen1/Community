import React, { Component } from 'react';
import NavBar from './NavBar';
import About from './About';
import MainPage from './MainPage';

class App extends React.Component {

  render(){
    
    return (
      <div className="CommunityBrews">
   <div className="appForm">
    <NavBar/>
    </div>
         <About/>
         
       
         
             </div>
  );
}
}

export default App;