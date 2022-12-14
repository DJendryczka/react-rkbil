import React from 'react';
import '../styles/About.css';
import Aboutimg from '../../assets/rk.jpg';
import Maskinimg from '../../assets/benk.jpg';

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
            års erfaranhet inom bilplåtskador. Vi följer alltid fabrikantens
            anvisningar och uppdaterar vår kunskap om dessa löpande. Vi åtar oss
            stora så som små uppdrag. Någgrannhet och snabba leveranser är vår
            starka sida.
          </p>
        </div>
      </div>
      <div className='container-box'>
      <div className='img-box'>
          <img src={Maskinimg} alt='RK Bil dragbänk' className='img' />
        </div>
        <div className='box'>
          <h1 className='about-tittle'>Vår Maskinpark</h1>
          <p className='about-text'>
            RK Bilskadecenter är utrustad med moderna riktbänkar, vilka tillåter att 
            utföra reparationer inom klass 2. Det vill säga att reparera stora krockar, där man måste 
            återställa bilen till dess usprungliga mått. Vår maskinpark uppdateras ständigt, för att mötta de krav reparationer kräver.
          </p>
        </div>
        
      </div>
      <div className='container-box'>
      <div className='box'>
          <h1 className='about-tittle'>Vår Arbetsätt</h1>
          <p className='about-text'>
            RK Bilskadecenter läger stor vikt till kvalitet. Det uppnår vi genom vår mångåriga erfaranhet
            samt att vi alltid följer
            fabrikantens anvisningar. På detta sättet känner vi oss trygga med utfört arbete.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
