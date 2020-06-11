import React from 'react';

import './App.css';

//First Method
function App(props) {
  return (
    <div>
      Hello World !!
      <h1>Its my first react app.. YAHOO !!</h1>
      <div>Hello! {props.name} your age is {props.age}</div>
    </div>
  );
}

//Second Method
/*function App({name, age}) {
  return (
    <div>
      Hello World !!
      <h1>Its my first react app.. YAHOO !!</h1>
      <div>Hello! {name} your age is {age}</div>
    </div>
  );
}*/

export default App;
