//  import React from 'react'
// import '../styles/newsletter.css'
// import { Container, Row, Col } from 'reactstrap'
// import maleTourist from '../assets/images/male-tourist.png'

// const NewsLetter = () => {
//    return (
//       <section className='newsletter'>
//          <Container>
//             <Row>
//                <Col lg='6'>
//                   <div className="newsletter__content">
//                      <h2>Subcribe now to get more details about our artwork</h2>

//                      <div className="newsletter__input">
//                         <input type="email" placeholder='Enter your email' />
//                         <button className="btn newsletter__btn">Subcribe</button>
//                      </div>
//                      <p>Connect with us and share your experience by signing up using email follow the steps for more.
//                      </p>
//                   </div>
//                </Col>
//                <Col lg='6'>
//                   <div className="newsletter__img">
//                      <img src={maleTourist} alt="" />
//                   </div>
//                </Col>
//             </Row>
//          </Container>
//       </section>
//    )
// }

// export default NewsLetter

import React, { useState } from 'react';
import '../styles/newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';
import toast from 'react-hot-toast';

const NewsLetter = () => {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [newsletterLoading, setNewsletterLoading] = useState(false);

    const API_URL = "https://api.web3forms.com/submit";
    const ACCESS_KEY = "37ac0153-c18b-4bfb-a9fa-18e0e8f759a0"; 

    // Handle contact form input changes
    const handleContactChange = (e) => {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    };

    // Handle newsletter email input change
    const handleNewsletterChange = (e) => {
        setNewsletterEmail(e.target.value);
    };

    // Validate Contact Form
    const validateContactForm = () => {
        let newErrors = {};
        if (!contactForm.name.trim()) newErrors.name = 'Name is required';
        if (!contactForm.email.trim()) newErrors.email = 'Email is required';
        if (!contactForm.subject.trim()) newErrors.subject = 'Subject is required';
        if (!contactForm.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Contact Form Submission
    const handleContactSubmit = async (e) => {
        e.preventDefault();

        if (!validateContactForm()) {
            toast.error('Please fill in all fields correctly.');
            return;
        }

        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", ACCESS_KEY);
        formDataToSend.append("name", contactForm.name);
        formDataToSend.append("email", contactForm.email);
        formDataToSend.append("subject", contactForm.subject);
        formDataToSend.append("message", contactForm.message);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: formDataToSend
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Message sent successfully!");
                setContactForm({ name: '', email: '', subject: '', message: '' }); // Reset form
            } else {
                toast.error("Failed to send message.");
            }
        } catch (error) {
            toast.error("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    // Handle Newsletter Subscription
    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        if (!newsletterEmail.trim()) {
            toast.error("Please enter a valid email.");
            return;
        }

        setNewsletterLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", ACCESS_KEY);
        formDataToSend.append("email", newsletterEmail);
        formDataToSend.append("subject", "New Newsletter Subscription");
        formDataToSend.append("message", `New subscription from: ${newsletterEmail}`);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: formDataToSend
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Subscribed successfully!");
                setNewsletterEmail(''); // Reset email input
            } else {
                toast.error("Subscription failed.");
            }
        } catch (error) {
            toast.error("Something went wrong. Try again.");
        } finally {
            setNewsletterLoading(false);
        }
    };

    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    {/* Newsletter Subscription */}
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get more details about our artwork</h2>
                            <form className="newsletter__input" onSubmit={handleNewsletterSubmit}>
                                <input 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    value={newsletterEmail} 
                                    onChange={handleNewsletterChange} 
                                />
                                <button type="submit" className="btn newsletter__btn" disabled={newsletterLoading}>
                                    {newsletterLoading ? "Subscribing..." : "Subscribe"}
                                </button>
                            </form>
                            <p>Connect with us and share your experience by signing up using email follow the steps for more.</p>
                        </div>
                    </Col>

                    {/* Contact Form */}
                    <Col lg='6'>
                        <div className="contact__form">
                            <h2>Contact Us</h2>
                            <form onSubmit={handleContactSubmit}>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Your Name" 
                                    value={contactForm.name} 
                                    onChange={handleContactChange} 
                                />
                                {errors.name && <span className="error">{errors.name}</span>}

                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Your Email" 
                                    value={contactForm.email} 
                                    onChange={handleContactChange} 
                                />
                                {errors.email && <span className="error">{errors.email}</span>}

                                <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    value={contactForm.subject} 
                                    onChange={handleContactChange} 
                                />
                                {errors.subject && <span className="error">{errors.subject}</span>}

                                <textarea 
                                    name="message" 
                                    placeholder="Your Message" 
                                    rows="4" 
                                    value={contactForm.message} 
                                    onChange={handleContactChange}
                                ></textarea>
                                {errors.message && <span className="error">{errors.message}</span>}

                                <button type="submit" className="btn contact__btn" disabled={loading}>
                                    {loading ? "Sending..." : "Submit"}
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NewsLetter;