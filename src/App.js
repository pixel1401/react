// import logo from './logo.svg';
import { Route } from "react-router";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import DialogContainer from "./component/dialog/Dialog-container";
import Profile from "./component/profile/profile-container"
import WorksContainer from "./component/work/work-container";
import SidebarContainer from "./component/sidebar/sidebar-container";
import UsersContainer from "./component/users/Users-container";
import HeaderContainer from "./component/header/Header-container";
import Login from "./component/login/Login";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <SidebarContainer  />

        <div className="app-wrapper-window">
            <Route path="/profile/:userId?" render={() => <Profile/>} />

            <Route path="/dialog" render={() => <DialogContainer/>} />

            <Route path="/works" render={() => <WorksContainer/>} />
            <Route path="/users" render={()=> <UsersContainer/>}/>

            <Route path="/" render={()=> <Login/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
