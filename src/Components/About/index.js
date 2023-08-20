import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css'

const About = () => {

    const boxVariants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: .3,
                staggerChildren: 0.0
            }
        }
    };

    const [isSectionVisible, setIsSectionVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                setIsSectionVisible(isVisible);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check on component mount
        handleScroll();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <motion.section id="about" initial="hidden" animate={isSectionVisible ? "visible" : "hidden"}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
                        <div className="about-title">
                            <h3>About <span>Me</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <motion.div initial={{ opacity: 0, x: 0, y: 60, scale: 1, rotate: 0 }}
                            animate={{
                                opacity: isSectionVisible ? 1 : 0,
                                x: isSectionVisible ? 0 : 0,
                                y: isSectionVisible ? 0 : -100,
                                scale: 1,
                                rotate: 0,
                            }}
                            transition={{ duration: 0.7 }}
                            className="about-inner-left"
                        >
                            <p>I started coding in 2020. I'm a mid-level expert in React.JS, Node.JS, Express.JS, JavaScript, ES6, typescript, SASS, jQuery, Firebase, Photoshop, figma and many more. I enjoy it a lotwhen I do code. I've already built 40+ responsive websites. my hobby is photography and I spare time spend with watching movies.</p>
                            <p> I'm highly interested in the software industry and looking for the right team so that I can push my career as a developer.</p>
                        </motion.div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-inner-right">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <motion.div className="box" initial="hidden" animate={isSectionVisible ? "visible" : "hidden"} variants={boxVariants}>
                                        <h4 className="counter">14</h4>
                                        <h3>React Project</h3>
                                    </motion.div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <motion.div className="box" variants={boxVariants}>
                                        <h4 className="counter">40</h4>
                                        <h3>Responsive</h3>
                                    </motion.div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <motion.div className="box" variants={boxVariants}>
                                        <h4 className="counter">12</h4>
                                        <h3>JS Project</h3>
                                    </motion.div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <motion.div className="box" variants={boxVariants}>
                                        <h4 className="counter">1</h4>
                                        <h3>SASS</h3>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>

    );
};

export default About;
