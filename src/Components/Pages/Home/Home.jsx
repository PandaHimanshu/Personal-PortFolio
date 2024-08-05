import React from 'react';
import './Home.css';
import reactpng from '../../../assets/myimg.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../../Header/Header';
import Typewriter from 'typewriter-effect';

function Home() {

  return (
    <>

      <section className='section1' id='home'>
        <div className='container' id='info'>
        <div className='containerChild1'>
        <div className='home-name'>
              <span>Hi, I am</span><br /><span>Himanshu Shekhar . .</span>
            </div>
            <div className='home-prof'>
              <span className='inLine'>I am a&nbsp;</span><span className='inLine'><Typewriter
                options={{
                  strings: ['Frontend Developer', 'Android Developer', 'JAVA Developer'],
                  autoStart: true,
                  loop: true,
                }}
              /></span>
            </div>
            <a href='https://drive.google.com/file/d/1al-ds_RDJnv4YILiCCoVhKZ2OJyI6bgQ/view' target="_blank" rel="noopener noreferrer">
              <button className='resume'>
                Download Resume
                <i className="bi bi-arrow-down-circle-fill icon"></i>
              </button></a>
            <div className='icons'>
              <a href='https://www.linkedin.com/in/himanshu-shekhar-panda-b750b5263/' target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i></a>
              <a href='https://github.com/PandaHimanshu' target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i></a>
              <a href='https://www.instagram.com/himanshupanda80/' target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i></a>
              <a href='https://www.facebook.com/profile.php?id=100072037147611' target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i></a>
              <a href='https://x.com/Himanshu707799?t=6VU6j-FY5J5uCMCubg0J1w&s=09' target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i></a>
                </div>
        </div>
        <div className='containerChild2'>
        <img id='img' src={reactpng} alt="Profile" />
        </div>
        </div>
        
      </section>
    </>
  );
}

export default Home;
