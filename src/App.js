import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Profile/>
        <Footer/>
      </div>
    )
  }
}

export default App;
