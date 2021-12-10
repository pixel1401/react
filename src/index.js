import store from "./redux/store-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export const renderDom = (state )=> ReactDOM.render(
  <React.StrictMode>
    <App state={state} 
      dispatch={store.dispatch.bind(store)}
    />
  </React.StrictMode>
  ,
  document.getElementById('root')
);


renderDom(store.getState());


store.subscribe(()=> {
  renderDom(store.getState())
});



reportWebVitals();










