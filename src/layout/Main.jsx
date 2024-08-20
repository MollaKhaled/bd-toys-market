import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import { Outlet } from 'react-router-dom';
import Register from '../components/Login/Register';
import Login from '../components/Login/Login';


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet>
        <Register></Register>
        <Login></Login>
      </Outlet>
    </div>
  );
};

export default Main;