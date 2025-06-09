import React from 'react'
import './footer.css'
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024 Your Online Learning Platform.All rights reserved.<br /> Made with 💖 <a href="https://www.instagram.com/">Avtansh Tripathi <BsInstagram /></a>
            </p>
            <div className="social-links">
                <a href="https://github.com/Avtansh88"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/avtansh-tripathi-29a982289/"><ImLinkedin /></a>
                <a href="https://www.youtube.com/"><IoLogoYoutube  /></a>
            </div>
        </div>
    </footer>
  );
}

export default Footer
