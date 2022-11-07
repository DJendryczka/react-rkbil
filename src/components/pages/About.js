import React from 'react';
import '../styles/About.css';
import Aboutimg from '../../assets/rkfront.jpg';

const About = () => {
  return (
    <div className='container'>
      <div className='container-box'>
        <div className='img-box'>
          <img src={Aboutimg} alt='RK Bil entrance' className='img' />
        </div>
        <div className='box'>
          <h1 className='about-tittle'>Om Oss</h1>
          <p className='about-text'>
            RK Bilskadecenter är ett relativt ny startad företag, dock med många
            års erfaranhet inom bilplåtskador. Vi följer alltid fabrikantenss
            anvisningar och uppdaterar vår kunskap om dessa löpande. Vi åtar oss
            stora så som små uppdrag. Någgrannhet och snabba leveranser är vår
            starka sida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
