import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css'

const About = () => {


    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const isLargeScreen = window.innerWidth > 991;

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                setIsSectionVisible(isVisible);
            }
        };

        const handleResize = () => {
            handleScroll();
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const animationVariants = {
        hidden: { opacity: 0, x: 0, y: isLargeScreen ? 0 : 40, scale: 1, rotate: 0 },
        visible: { opacity: isSectionVisible ? 1 : 0, x: 0, y: 0, scale: 1, rotate: 0 },
    };

    const slideInVariantLeft = {
        hidden: { x: '-60px', opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    const slideInVariantRight = {
        hidden: { x: '60px', opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    const slideInVariantTop = {
        hidden: { y: '-60px', opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const slideInVariantBottom = {
        hidden: { y: '60px', opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

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
                        {isLargeScreen ? (
                            <motion.div
                                initial={animationVariants.hidden}
                                animate={animationVariants.visible}
                                transition={{ duration: 0.7 }}
                                className={`about-inner-left ${isLargeScreen ? '' : 'disable-animation'}`}
                            >
                                <p>I started coding in 2020. I'm a mid-level expert in React.JS, Node.JS, Express.JS, JavaScript, ES6, typescript, SASS, jQuery, Firebase, Photoshop, figma and many more. I enjoy it a lotwhen I do code. I've already built 40+ responsive websites. my hobby is photography and I spare time spend with watching movies.</p>
                                <p> I'm highly interested in the software industry and looking for the right team so that I can push my career as a developer.</p>
                            </motion.div>
                        ) : (
                            <div className="about-inner-left">
                                <p>I started coding in 2020. I'm a mid-level expert in React.JS, Node.JS, Express.JS, JavaScript, ES6, typescript, SASS, jQuery, Firebase, Photoshop, figma and many more. I enjoy it a lotwhen I do code. I've already built 40+ responsive websites. my hobby is photography and I spare time spend with watching movies.</p>
                                <p> I'm highly interested in the software industry and looking for the right team so that I can push my career as a developer.</p>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div
                            initial={animationVariants.hidden}
                            animate={animationVariants.visible}
                            transition={{ duration: 0.7 }}
                            className={`about-inner-right ${isLargeScreen ? '' : 'disable-animation'}`}

                        >
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <motion.div
                                        className={`box ${isLargeScreen ? '' : 'disable-animation'}`}
                                        initial="hidden"
                                        animate={isSectionVisible ? 'visible' : 'hidden'}
                                        transition={{ duration: 0.4 }}
                                        variants={slideInVariantLeft}
                                    >
                                        <h4 className="counter">14</h4>
                                        <h3>React Project</h3>
                                    </motion.div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <motion.div
                                        className={`box ${isLargeScreen ? '' : 'disable-animation'}`}
                                        initial="hidden"
                                        animate={isSectionVisible ? 'visible' : 'hidden'}
                                        transition={{ duration: 0.4 }}
                                        variants={slideInVariantTop}
                                    >
                                        <h4 className="counter">40</h4>
                                        <h3>Responsive</h3>
                                    </motion.div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <motion.div
                                        className={`box ${isLargeScreen ? '' : 'disable-animation'}`}
                                        initial="hidden"
                                        animate={isSectionVisible ? 'visible' : 'hidden'}
                                        transition={{ duration: 0.4 }}
                                        variants={slideInVariantBottom}
                                    >
                                        <h4 className="counter">12</h4>
                                        <h3>JS Project</h3>
                                    </motion.div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <motion.div
                                        className={`box ${isLargeScreen ? '' : 'disable-animation'}`}
                                        initial="hidden"
                                        animate={isSectionVisible ? 'visible' : 'hidden'}
                                        transition={{ duration: 0.4 }}
                                        variants={slideInVariantRight}
                                    >
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
