import React from 'react';
import './App.css';
import Feautures from './components/Feautures/Feautures';
import Home from './components/Home/Home';
import Operations from './components/Operations/Operations';
import Testimonials from './components/Teastimonial/Testimonials';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      
    <Navbar/>
    <Home/>
    <Feautures/>
    <Operations/>
    <Testimonials/>
    </div>
  );
}

export default App;
