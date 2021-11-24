// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialog from './component/dialog/Dialog';
import Header from './component/header/header';
import Sidbar from './component/nav/nav';
import Profile from './component/profile/profile';
import Works from './component/work/work';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Sidbar/>
        
        <div className="app-wrapper-window">
          <Route path="/profile" component={Profile} />
          <Route path="/dialog" component={Dialog} />
          <Route path="/works" component={Works}/> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
