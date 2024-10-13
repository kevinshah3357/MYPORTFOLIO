import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Devansh Sahni</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/kevinshah3357" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/kevin-shah-940a6922b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:shahkevin033@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://github.com/kevinshah3357" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer