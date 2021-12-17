import store from "./redux/store-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoreContext from "./context";


export const renderDom = (state) => ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>


  </React.StrictMode>
  ,
  document.getElementById('root')
);


renderDom(store.getState());


store.subscribe(() => {
  renderDom(store.getState())
});



reportWebVitals();










