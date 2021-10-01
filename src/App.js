// import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Sidbar from './component/nav';
import Profile from './component/profile';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Sidbar/>
      <Profile/>
    </div>
  );
}

export default App;
