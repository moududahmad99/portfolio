import React from 'react';
import './style.css'

const About = () => {

    return (
        <section id="about">
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
                        <div className="about-inner-left">
                            <p>I started coding in 2020. I'm a mid-level expert in React.JS, JavaScript, ES6, MongoDB, typescript, SASS, jQuery, ReactNative, Firebase, Photoshop, figma and many more. I enjoy it a lotwhen I do code. I've already built 20+ responsive websites. my hobby is photography and I spare time spend with watching movies.</p>
                            <p> I'm highly interested in the software industry and looking for the right team so that I can push my career as a developer.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-inner-right">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <div className="box">
                                        <h4 className="counter">14</h4>
                                        <h3>React Project</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <div className="box">
                                        <h4 className="counter">29</h4>
                                        <h3>Responsive</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <div className="box">
                                        <h4 className="counter">12</h4>
                                        <h3>JS Project</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                                    <div className="box">
                                        <h4 className="counter">1</h4>
                                        <h3>SASS</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
