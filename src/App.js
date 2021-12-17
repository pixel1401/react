// import logo from './logo.svg';
import { Route } from "react-router";
import './App.css';
import Header from './component/header/header';
import Sidbar from './component/nav/nav';
import Works from './component/work/work';
import Profile from "./component/profile/profile.jsx";
import { BrowserRouter } from 'react-router-dom';
import DialogContainer from "./component/dialog/Dialog-container";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidbar  />

        <div className="app-wrapper-window">
            <Route path="/profile" render={() => <Profile
              
            />} />

            <Route path="/dialog" render={() => <DialogContainer
              
            />} />

            <Route path="/works" render={() => <Works
               />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
