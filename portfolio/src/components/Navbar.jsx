import React from 'react';
import '../styling/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import GitHub icon from brand icons

function Navbar() {
    return (
        <div className='parent-navbar'>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <a className="navbar-brand" href="#home">Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#about-me">About me</a>
                        <a className="nav-item nav-link active" href="#education">Education</a>
                        <a className="nav-item nav-link active" href="#skills">Skills</a>
                        <a className="nav-item nav-link active" href="#projects">Projects</a>
                        <a className="nav-item nav-link active" href="#contact">Contact</a>
                        <a className="nav-item nav-link active" href="https://drive.google.com/file/d/16moAnLyAngBPLWR74iByoSC3f8vLKSYY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#home" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Follow me!
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="https://github.com/AMEYSATI" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>    
                                <a className="dropdown-item" href="https://www.linkedin.com/in/ameysati/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> Linkedin</a>
                                <a className="dropdown-item" href="https://www.instagram.com/ameysati/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
