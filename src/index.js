
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';




 const renderEntireTree = (state) => {



  let el = <App appState = {store.state} addPost={store.addPost.bind(store)} textChanger={store.textChanger.bind(store)} />;
  
  ReactDOM.render(
  el,
    document.getElementById('root')
  );
  
  }
  store.subscribe(renderEntireTree)
  renderEntireTree(store.state)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
