import React from 'react';
import '../styles/Home.css';
import SplashImg from '../../assets/car.mp4';
const Home = () => {
  return (
    <div className='container'>
      <video src={SplashImg} autoPlay loop muted />
      <div className='overlay'></div>
      <div className='header'>
        <h1>Välkommen till RKBilskadecenter AB</h1>
        <h2>Din lokala bilskadereparatör</h2>
      </div>
    </div>
  );
};

export default Home;
