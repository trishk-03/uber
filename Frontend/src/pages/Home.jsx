import React from 'react'
import homeImage from '../assets/images/Home.jpg'
const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
    </div>
  );
};

export default Home