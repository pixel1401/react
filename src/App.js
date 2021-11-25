// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialog from './component/dialog/Dialog';
import Header from './component/header/header';
import Sidbar from './component/nav/nav';
import Works from './component/work/work';
import Profile from "./component/profile/profile.jsx";
import postsBase from './index';



function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Sidbar/>
        
        <div className="app-wrapper-window">
          <Route path="/profile" render={() => <Profile posts={props.posts}/>} />
          <Route path="/dialog" render={() => <Dialog dialogs={props.dialogs} messeges={props.messeges}/>} />
          <Route path="/works" render={() => <Works works={props.works}/>}/> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
