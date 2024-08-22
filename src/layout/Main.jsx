import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import { Outlet } from 'react-router-dom';
import Register from '../components/Login/Register';
import Login from '../components/Login/Login';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet>
        <Login></Login>
        <Register></Register>
        <About></About>
      </Outlet>


      <Footer></Footer>
    </div>
  );
};

export default Main;