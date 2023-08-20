import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
// import axios from 'axios';
import { motion } from 'framer-motion';

import { FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdPlace, MdSend } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Style.css';

const Contact = () => {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const initialValues = {
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        message: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Required Full Name'),
        emailAddress: Yup.string().email('Invalid email address').required('Required Email Address'),
        phoneNumber: Yup.string().required('Required Phone Number'),
        message: Yup.string().required('Required Message'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            console.log(values);
            toast.error('Form submitted successfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
            });
            resetForm();
            setSubmitting(false);
        }, 1000);
    };


    // const handleSubmit = (values, { setSubmitting }) => {
    //     // Make a POST request to your server with the form data
    //     axios
    //         .post('/api/send-email', values) // Replace '/api/send-email' with your server endpoint
    //         .then((response) => {
    //             console.log('Email sent successfully!', response);
    //         })
    //         .catch((error) => {
    //             console.error('Failed to send email:', error);
    //         })
    //         .finally(() => {
    //             setSubmitting(false); // Don't forget to set isSubmitting to false after the request completes
    //         });
    // };

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

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isLargeDevice = window.innerWidth <= 991;


    const slideInVariantLeft = {
        hidden: { x: '-100px', opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    const slideInVariantRight = {
        hidden: { x: '100px', opacity: 0 },
        visible: { x: 0, opacity: 1 },
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
                        {isLargeDevice ? (
                            <div className="contact-inner-left" >
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
                                            <span className='my-location'>Thakurgaon, Bangladesh</span>
                                        </div>
                                        <div className="contact-inner d-flex my-4">
                                            <i><FaLinkedin /></i>
                                            <a href="https://www.linkedin.com/in/sabbirahmadmoudud/" target="_blank" rel="noopener noreferrer">Sabbir Ahmad Moudud</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                className="contact-inner-left"
                                initial="hidden"
                                animate={isSectionVisible ? "hidden" : "visible"}
                                transition={{ duration: 1 }}
                                variants={slideInVariantLeft}
                            >
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
                                            <span className='my-location'>Thakurgaon, Bangladesh</span>
                                        </div>
                                        <div className="contact-inner d-flex my-4">
                                            <i><FaLinkedin /></i>
                                            <a href="https://www.linkedin.com/in/sabbirahmadmoudud/" target="_blank" rel="noopener noreferrer">Sabbir Ahmad Moudud</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <div className="col-lg-7 col-md-12">
                        {isLargeDevice ? (
                            <div className="contact-inner-right" >
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <h3>Full Name</h3>
                                        <div className='contact-right--inner'>
                                            <Field className="field" type="text" name="fullName" />
                                            <ErrorMessage name="fullName" component="div" className="error-message" />
                                        </div>

                                        <div className="contact-right--inner">
                                            <h3>Email Address</h3>
                                            <Field className="field" type="text" name="emailAddress" />
                                            <ErrorMessage name="emailAddress" component="div" className="error-message" />
                                        </div>
                                        <div className="contact-right--inner">
                                            <h3>Phone Number</h3>
                                            <Field className="field" type="text" name="phoneNumber" />
                                            <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                                        </div>
                                        <div className="contact-right--inner">
                                            <h3>Message</h3>
                                            <Field className="field-message" type="text" name="message" />
                                            <ErrorMessage name="message" component="div" className="error-message--textarea" />
                                        </div>

                                        <button type="submit" disabled={isSubmitting}>
                                            Send
                                            <i><MdSend /></i>
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        ) : (
                            <motion.div className="contact-inner-right" initial="hidden" animate={isSectionVisible ? "hidden" : "visible"} transition={{ duration: 1 }} variants={slideInVariantRight}>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <h3>Full Name</h3>
                                        <div className='contact-right--inner'>
                                            <Field className="field" type="text" name="fullName" />
                                            <ErrorMessage name="fullName" component="div" className="error-message" />
                                        </div>

                                        <div className="contact-right--inner">
                                            <h3>Email Address</h3>
                                            <Field className="field" type="text" name="emailAddress" />
                                            <ErrorMessage name="emailAddress" component="div" className="error-message" />
                                        </div>
                                        <div className="contact-right--inner">
                                            <h3>Phone Number</h3>
                                            <Field className="field" type="text" name="phoneNumber" />
                                            <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                                        </div>
                                        <div className="contact-right--inner">
                                            <h3>Message</h3>
                                            <Field className="field-message" type="text" name="message" />
                                            <ErrorMessage name="message" component="div" className="error-message--textarea" />
                                        </div>

                                        <button type="submit" disabled={isSubmitting}>
                                            Send
                                            <i><MdSend /></i>
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </motion.div>
                        )}
                    </div>
                </div>
            </div>
            <a className="backToTop" href="##" onClick={handleBackToTop}>
                <i><AiOutlineArrowUp /></i>
            </a>
        </section>
    );
};

export default Contact;
