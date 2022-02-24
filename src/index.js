import store from "./redux/store-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import MainApp from "./App";


ReactDOM.render(
    <MainApp/>
  ,
  document.getElementById('root')
);








reportWebVitals();







//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();


