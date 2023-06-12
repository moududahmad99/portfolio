import React from 'react';
import { FaPhone} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdPlace } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineArrowUp  } from 'react-icons/ai';

import './Style.css'

const Contact = () => {

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <section id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-8 col-sm-12 text-center">
                        <div className="contact-title">
                            <h3>Contact <span>Me</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="contact-inner-left">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Get in Touch</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-inner d-flex my-4">
                                        <i><FaPhone /></i>
                                        <a href="tel:+8801619863686">+880 1619863686</a>
                                    </div>
                                    <div className="contact-inner d-flex my-4">
                                        <i><HiOutlineMail /></i>
                                        <a href="mailto:sabbirahmedmoudud@gmail.com">sabbirahmedmoudud@gmail.com</a>
                                    </div>
                                    <div className="contact-inner d-flex my-4">
                                        <i><MdPlace /></i>
                                        <span>Pallabi Mirpur 12, Dhaka 1216</span>
                                    </div>
                                    <div className="contact-inner d-flex my-4">
                                        <i><FaLinkedin /></i>
                                        <a href="https://www.linkedin.com/in/sabbirahmadmoudud/" target="_blank" rel="noopener noreferrer">Sabbir Ahmad Moudud</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="contact-inner-right">
                            <h3>Full Name</h3>
                            <input className="field" type="text" />
                            <h3>Email Address</h3>
                            <input className="field" type="text" />
                            <h3>Phone Number</h3>
                            <input className="field" type="text" />
                            <h3>Message</h3>
                            <input className="field-message" type="text" />
                            <a href>Send</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="backToTop" href="##" onClick={handleBackToTop}>
                <i><AiOutlineArrowUp  /></i>
            </a>
        </section>
    );
};

export default Contact;
