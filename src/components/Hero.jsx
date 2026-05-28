import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiPhone
} from 'react-icons/fi';
import '../styles/Hero.css';
import profilePhoto from '../assets/images/profile-photo.jpg';
import resumePDF from '../assets/documents/Eason_Xie_Resume.pdf';

const MotionDiv = motion.div;

const Hero = () => {
  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Eason_Xie_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <MotionDiv
                className="hero-image"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <img
                  src={profilePhoto}
                  alt="Eason (BingXian) Xie"
                  className="profile-img"
              />
            </MotionDiv>

            <MotionDiv
                className="hero-text"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
            >
              <h1 className="hero-title">
                Eason Xie builds practical software from messy real-world data.
              </h1>
              <p className="hero-description">
                Northeastern data science and mathematics student turning research,
                municipal operations, and full-stack projects into clear systems that people can use.
              </p>

              {/* Key Stats */}
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">3.65</span>
                  <span className="stat-label">GPA</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">AI Samples</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10,000+</span>
                  <span className="stat-label">Records Analyzed</span>
                </div>
              </div>

              {/* Status */}
              <div className="hero-status">
                <span className="status-badge">Expected Graduation: Apr 2028</span>
                <span className="status-badge">U.S. Permanent Resident</span>
                <span className="status-badge">Dean's List Spring 2025</span>
              </div>

              {/* Call to Action Buttons */}
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={downloadResume}>
                  <FiDownload aria-hidden="true" />
                  Download Resume
                </button>
                <button className="btn btn-secondary" onClick={scrollToContact}>
                  <FiMessageCircle aria-hidden="true" />
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="hero-social">
                <a
                    href="https://www.linkedin.com/in/bingxian-xie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                >
                  <FiLinkedin aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                    href="https://www.github.com/2426-BingXianXie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                >
                  <FiGithub aria-hidden="true" />
                  GitHub
                </a>
                <a
                    href="mailto:xie.bingx@northeastern.edu"
                    className="social-link"
                    aria-label="Email"
                >
                  <FiMail aria-hidden="true" />
                  Email
                </a>
                <a
                    href="tel:+18572729958"
                    className="social-link"
                    aria-label="Phone"
                >
                  <FiPhone aria-hidden="true" />
                  Phone
                </a>
              </div>
            </MotionDiv>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <FiArrowDown aria-hidden="true" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>
  );
};

export default Hero;
