import React from 'react';
import './App.css';

//First Method
function Demo({name}) {
  return (
    <div>
      
      Welcome <strong>{name}</strong> from Demo.JS {5 + 10}
      <br/>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>  
      </ul>

    </div>
  );
}

export default Demo;
