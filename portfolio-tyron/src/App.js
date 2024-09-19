import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './router/Home.js';
import About from './router/About.js';


function App() {


  return<>
  <Navbar></Navbar>
  <Outlet></Outlet>
   <Routes>
    <Route path='/' element={<Home/>}>
    </Route>
   <Route path='/about' element={<About/>}></Route>

  </Routes>
  </>
  
 
}

export default App;
