import './App.css';
import LoginForm from './components/loginform';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <div className="">
     
     <Router>
     <Profile></Profile>
      {/* <LoginForm></LoginForm> */}
      <Routes>
        <Route path='/' ></Route>
        <Route path='/card'></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;