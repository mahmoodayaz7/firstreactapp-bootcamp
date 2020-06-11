import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import MediaCard from './MediaCard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MediaCard title="Media Card" body="My First React App" imageUrl="img.png"/>
    <App name="Mehmood Ayaz" age={35+1} />
    <Demo name="Mehmood Ayaz" ></Demo>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
