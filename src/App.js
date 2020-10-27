import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './components/Body';
import  Chat from './components/Chat';

 
class App extends Component {

 
 
  render() {
    return (
      <div className="app">
         <Router>
         
      <Navbar />
      <Body/>
      <Chat/>
     
    </Router>
        
      </div>
    );
  }
}



export default App;
