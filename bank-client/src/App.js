// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';
import RegistrationNext from './components/RegistrationNext';

// import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contactUs' element={<Contact/>}/>
      <Route path='/aboutUs' element={<About/>}/>
      <Route path='/logIn' element={<Login/>}/>
      <Route path='/signUp' element={<Registration/>}/>
      <Route path='/next' element={<RegistrationNext/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
