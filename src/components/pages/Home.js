import React from 'react';
import '../styles/Home.css';
import SplashImg from '../../assets/car.mp4';
const Home = () => {
  return (
    <div className='container-home'>
      <video src={SplashImg} autoPlay loop muted />
      <div className='overlay'></div>
      <div className='header'>
        <h1 className='splash-text'>
          Välkommen till <br />
          <span className='company-name'>RK Bilskadecenter AB</span>
        </h1>

        <div className='splash-card-text'>
          <h2>Har du en krockskadad bil ? Då har du kommit rätt. </h2>
          <p>
            Våra tjänster består av bilplåt reparationer samt lackering av alla
            bilmärke.<br/>
            Vi äslkar bilar och tar väll hand om de!.<br/>
            Ring Robban +46 762696401 och boka tid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
