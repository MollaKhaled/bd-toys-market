import React from 'react';
import Toys from './Toys/Toys';
import useTitle from '../hooks/useTitle';

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Toys></Toys>
    </div>
  );
};

export default Home;