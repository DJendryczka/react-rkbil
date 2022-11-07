import React from 'react';
import '../styles/Home.css';
import SplashImg from '../../assets/car.mp4';
const Home = () => {
  return (
    <div className='container-home'>
      <video src={SplashImg} autoPlay loop muted />
      <div className='overlay'></div>
      <div className='header'>
        <h1 className='splash-text'>Välkommen till <br/><span className='company-name'>RK Bilskadecenter AB</span></h1>
        <h2>Din lokala bilskadereparatör</h2>
      </div>
    </div>
  );
};

export default Home;
