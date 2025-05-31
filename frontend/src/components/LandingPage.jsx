// src/pages/LandingPage.jsx

import React from 'react'
import '../styles/landingpage.css'
import '../styles/global.css'
import '../styles/styleguide.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <nav>
                    <div className="logo">
                        {/* <img
                            src="assets/logo.png"
                            alt="Vitanet Logo"
                        
                        /> */}
                        <div className="logo-text">VITANET</div>
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#policies">Policies</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="hero">
                    <h1>
                        Unlocking Potential, Changing Lives: Vitanet's Revolutionary Approach to Clinical Trials
                    </h1>
                    <p>
                        Empowering patients, researchers, and healthcare providers with innovative technology for more efficient and
                        accessible clinical trials.
                    </p>
                    <a href="#learn-more" className="cta-button">Learn More</a>
                    <img
                        src="img/hero-image.png"
                        alt="Clinical trial illustration"
                        className="hero-image"
                    />
                </section>

                <section id="benefits">
                    <div className="benefit-card">
                        <img src="img/patient-engagement.svg" alt="Patient Engagement Icon" />
                        <h3>Patient Engagement</h3>
                        <p>Improved participation and retention through user-friendly interfaces and personalized experiences.</p>
                    </div>
                    <div className="benefit-card">
                        <img src="img/faster-research.svg" alt="Faster Research Icon" />
                        <h3>Faster Research Progress</h3>
                        <p>Streamlined data collection and analysis for quicker insights and study completion.</p>
                    </div>
                    <div className="benefit-card">
                        <img src="img/increased-trust.svg" alt="Increased Trust Icon" />
                        <h3>Increased Trust</h3>
                        <p>Enhanced transparency and communication between participants, researchers, and sponsors.</p>
                    </div>
                </section>

                <section id="services">
                    <h2>Services</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Medication Management</h3>
                            <p>
                                Allow users to create accounts and manage their profiles securely. Implement two-factor authentication
                                for added security.
                            </p>
                        </div>
                        <div className="service-card">
                            <h3>Information Sharing</h3>
                            <p>
                                Enable users to share specific health data and documents securely with their healthcare providers for
                                remote consultations.
                            </p>
                        </div>
                        <div className="service-card">
                            <h3>Remote Consultation Integration</h3>
                            <p>
                                Integrate video conferencing or messaging features to facilitate remote consultations with healthcare
                                professionals. Ensure compliance with telemedicine regulations and privacy standards.
                            </p>
                        </div>
                        <div className="service-card">
                            <h3>Data Privacy and Security</h3>
                            <p>
                                Implement robust data encryption and compliance with healthcare privacy regulations like HIPAA (Health
                                Insurance Portability and Accountability Act). Regularly audit security practices and conduct
                                vulnerability assessments.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="platform">
                    <h2>Empowering Participation, Accelerating Discovery</h2>
                    {/* <img
                        src="img/platform-screenshot.png"
                        alt="Vitanet Platform Screenshot"
                        className="platform-image"
                    /> */}
                </section>

                <section id="faq">
                    <h2>Frequently Asked Questions (FAQs)</h2>
                    <div className="faq-list">
                        <details>
                            <summary>What is Vitanet and how does it work?</summary>
                            <p>
                                Vitanet is a revolutionary platform that streamlines clinical trials by connecting patients,
                                researchers, and healthcare providers. It uses advanced technology to improve patient engagement, data
                                collection, and trial management.
                            </p>
                        </details>
                        <details>
                            <summary>How does Vitanet ensure data privacy and security?</summary>
                            <p>
                                Vitanet employs state-of-the-art encryption, follows HIPAA guidelines, and regularly conducts security
                                audits to protect user data and maintain the highest standards of privacy and security.
                            </p>
                        </details>
                        <details>
                            <summary>Can I participate in clinical trials through Vitanet?</summary>
                            <p>
                                Yes, Vitanet provides a user-friendly interface for patients to find and participate in relevant
                                clinical trials. You can create a profile, browse available trials, and connect with researchers
                                directly through the platform.
                            </p>
                        </details>
                        <details>
                            <summary>How does Vitanet benefit researchers and healthcare providers?</summary>
                            <p>
                                Vitanet offers tools for efficient patient recruitment, data management, and analysis. It also
                                facilitates better communication between all parties involved in clinical trials, leading to faster and
                                more accurate results.
                            </p>
                        </details>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-logo">
                        {/* <img
                            src="img/vitanet-removebg-preview-1-1.png"
                            alt="Vitanet Logo"
                            className="vitanet-removebg"
                        /> */}
                        <div className="logo-text">VITANET</div>
                    </div>
                    <p>
                        Don't miss the latest news and exclusive tips! Subscribe to our newsletter now and stay ahead in the world
                        of health and technology.
                    </p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your Email" required />
                        <button type="submit" aria-label="Subscribe to newsletter">
                            <img src="img/arrow.svg" alt="Subscribe" className="icon-arrow" />
                        </button>
                    </form>
                </div>
                <div className="footer-links">
                    <div className="link-column">
                        <h4>Menu</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#policies">Policies</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#cookies">Cookies Policy</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Social Media</h4>
                        <div className="social-icons">
                            <a href="#facebook" aria-label="Facebook"><img src="img/facebook-icon.png" alt="Facebook" /></a>
                            <a href="#twitter" aria-label="Twitter"><img src="img/twitter-icon.png" alt="Twitter" /></a>
                            <a href="#linkedin" aria-label="LinkedIn"><img src="img/linkedin-icon.png" alt="LinkedIn" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
