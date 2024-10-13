import Lottie from "lottie-react";
import React from 'react';
import Tilt from 'react-parallax-tilt';
import Coder from '../LottieFiles/coder.json';
import Skills from './Skills.js';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>KEVIN SHAH</b> and I am from Gujarat, India.
            I'm a <b>MERN stack web developer</b> and a final year college student pursuing <b>BE in IT</b> from <b>LD College of Engineering</b>. <br/><br/>
            I have done an internship as a <b>full stack web developer</b> at TatvaSoft
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>

          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About