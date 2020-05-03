import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var style={color:'red',
  // backgroundColor:'yellow'
  // }
  // var person={
  //   name: "Dr.Mahfuz",
  //   job: "Doctor" 
  // }
  // var person2={
  //   name: "eva rahman",
  //   job: "kokil kondhi"
  // }
  return (
    <div className="App">
      <header className="App-header">
      
        <p>My first similar component</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>


      </header>
    </div>
  );
}

function Person() {
  const personStyle={
    border:"2px solid red",
    margin:'15px',
  }
  return (<div style={personStyle}>
          <h1>shakib al hasan</h1>
          <h3>Hero of the Year</h3>
    </div>)
}
  

export default App;
