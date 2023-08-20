import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import './style.css';
import { motion } from 'framer-motion'

const Home = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <section id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="home-description">
                            <h4>moudud ahmad</h4>
                            <h3>React Developer</h3>
                            <p>
                                I'm a Junior React Developer with creative and analytical skills. I have a genuine
                                interest and curiosity in the software industry. I enjoy working collaboratively but
                                can also run projects on my own.
                            </p>
                            <a
                                href="assets/Resume of Sabbir Ahmad Moudud.pdf"
                                download

                            >
                                download CV
                                <i style={{ marginLeft: '5px' }}><FiDownload /></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-8">
                        <div className={`home-navNprofile ${isMenuOpen ? 'toggle' : ''}`}>
                            <picture>
                                <img src="images/portfolio-img crop 2.jpg" alt="profile" />
                            </picture>
                            <ul>
                                <li>
                                    <motion.a href="#home"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9, rotate: 1 }}
                                        drag
                                        dragConstraints={{
                                            top: -0.1,
                                            left: -0.1,
                                            right: 0.1,
                                            bottom: 0.1,
                                        }}
                                    >Home</motion.a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9, rotate: 1 }}
                                        drag
                                        dragConstraints={{
                                            top: -1,
                                            left: -.1,
                                            right: .1,
                                            bottom: 1,
                                        }}
                                        href="#project">Project</motion.a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is just for 320-787px button */}
            <div className="toggle-menu d-lg-none d-md-none" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
            </div>
        </section>
    );
};

export default Home;
