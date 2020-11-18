// const firebaseConfig = {
//   apiKey: "AIzaSyBjt_WsJGzlKRCb73M94fh3zFZO51AKSKY",
//   authDomain: "fir-88c99.firebaseapp.com",
//   databaseURL: "https://fir-88c99.firebaseio.com",
//   projectId: "fir-88c99",
//   storageBucket: "fir-88c99.appspot.com",
//   messagingSenderId: "244895865679",
//   appId: "1:244895865679:web:a299a4b8c982f4593b833a",
//   measurementId: "G-30Z449F3DK"
// };

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
