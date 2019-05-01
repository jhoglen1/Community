import React, { Component } from 'react';
import NavBar from './NavBar';
import About from './About';
import Boxes from './Boxes';
import MainPage from './MainPage';

class App extends React.Component {

  render(){
    
    return (
      <div className="CommunityBrews">
   <div className="appForm">
    <NavBar/>
    </div>
         <About/>
         <Boxes/>
       
         
             </div>
  );
}
}

export default App;