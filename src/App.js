import React from "react";
import { Suspense } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Route } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { getMeTh } from "./redux/header-reducer";
import { initializeApp } from "./redux/app-reducer";
import store from "./redux/store-redux";
import './App.css';
import Preloader from "./component/preloader/preloader";



// import DialogContainer from "./component/dialog/Messages-container";
import Profile from "./component/profile/profile-container"
// import WorksContainer from "./component/work/work-container";
import SidebarContainer from "./component/sidebar/sidebar-container";
import UsersContainer from "./component/users/Users-container";
import HeaderContainer from "./component/header/Header-container";
// import LoginContainer from "./component/login/Login-container";

// const UsersContainer = React.lazy(()=> import("./component/users/Users-container"));
const DialogContainer = React.lazy(()=> import("./component/dialog/Messages-container"));
// const Profile = React.lazy(()=> import("./component/profile/profile-container"));
const WorksContainer = React.lazy(()=> import("./component/work/work-container"));
// const SidebarContainer = React.lazy(()=> import("./component/sidebar/sidebar-container"));
// const HeaderContainer = React.lazy(()=> import("./component/header/Header-container"));
const LoginContainer = React.lazy(()=> import("./component/login/Login-container"));








class App extends React.Component {

  componentDidMount(props) {
    // this.props.getMeTh()
    this.props.initializeApp()
  }


  render() {
    return (
      <div className="wrapper">
        <div role={'main'} ></div>
        <HeaderContainer />
        <SidebarContainer />

        <div className="app-wrapper-window">
          <Suspense fallback={<div>Loading</div>}>
            <Route path="/profile/:userId?/:followed?" render={() => <Profile />} />

            <Route path="/dialog" render={() => <DialogContainer />} />

            <Route path="/works" render={() => <WorksContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />

            <Route path="/login" render={() => <LoginContainer />} />
          </Suspense>
        </div>
      </div>
    )
  }

}

let mapStateToProps = (state) => {
  return {
  }
}


let ComposeApp = compose(
  connect(mapStateToProps, { getMeTh, initializeApp })
)(App);



// For test
const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ComposeApp />
      </Provider>
    </BrowserRouter>
  )
}


export default MainApp
