// import logo from './logo.svg';
import { Route } from "react-router";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import DialogContainer from "./component/dialog/Messages-container";
import Profile from "./component/profile/profile-container"
import WorksContainer from "./component/work/work-container";
import SidebarContainer from "./component/sidebar/sidebar-container";
import UsersContainer from "./component/users/Users-container";
import HeaderContainer from "./component/header/Header-container";
import LoginContainer from "./component/login/Login-container";
import React from "react";
import { render } from "@testing-library/react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getMeTh } from "./redux/header-reducer";
import { initializeApp } from "./redux/app-reducer";
class App extends React.Component {

  componentDidMount(props) {
      // this.props.getMeTh()
    this.props.initializeApp()
  }


  render () {
    return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <SidebarContainer  />

        <div className="app-wrapper-window">
            <Route path="/profile/:userId?/:followed?" render={() => <Profile/>} />

            <Route path="/dialog" render={() => <DialogContainer/>} />

            <Route path="/works" render={() => <WorksContainer/>} />
            <Route path="/users" render={()=> <UsersContainer/>}/>

            <Route path="/login" render={()=> <LoginContainer/>}/>
        </div>
      </div>
    </BrowserRouter>
  )
  }
  
}

let mapStateToProps = (state)=> {
  return {
  }
}


export default compose(
  connect(mapStateToProps, { getMeTh, initializeApp} )  
)(App);
