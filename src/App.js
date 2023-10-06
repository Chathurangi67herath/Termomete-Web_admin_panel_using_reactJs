import './App.css';
import LoginForm from './components/loginform';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <div className="">
     
     <Router>
      <Home></Home>
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