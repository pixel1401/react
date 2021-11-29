import redux, { subscribe } from "./redux/redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewTextPost } from './redux/redux';

export const renderDom = (redux )=> ReactDOM.render(
  <React.StrictMode>
    <App redux={redux} addPost={addPost} updateNewTextPost={updateNewTextPost} />
  </React.StrictMode>
  ,
  document.getElementById('root')
);


renderDom(redux);


subscribe(renderDom);



reportWebVitals();










