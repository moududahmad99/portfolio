import React, { useState } from 'react';
import './style.css'

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Navbar Area Start */}
            <div id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="home-description">
                                <h4>moudud ahmad</h4>
                                <h3>frontend developer</h3>
                                <p>I'm a front-end developer with creative and analytical skills.
                                    I have a genuine interest and curiosity in the software industry. I enjoy working
                                    collaboratively but can also run projects on my own.
                                </p>
                                <a href="assets/Resume of Sabbir Ahmad Moudud.pdf" download>download CV</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-8">
                            <div className="home-navNprofile">
                                <picture>
                                    <img src="images/temp-profile.jpg" alt="profile" />
                                </picture>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#about">About</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#project">Projects</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* this is just for  320-787px button */}
                <div className="toggle-menu d-lg-none d-md-none" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>
            </div>
        </>
    );
};

export default Navbar;
