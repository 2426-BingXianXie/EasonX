import React from 'react';
import '../styles/Hero.css';
import profilePhoto from '../assets/images/profile-photo.jpg';
import resumePDF from '../assets/documents/Eason_Xie_Resume.pdf';

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
            {/* Profile Image */}
            <div className="hero-image">
              <img
                  src={profilePhoto}
                  alt="Eason (BingXian) Xie"
                  className="profile-img"
              />
            </div>

            {/* Hero Text */}
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="name-highlight">Eason Xie</span>
              </h1>
              <h2 className="hero-subtitle">
                Data Science & Full-Stack Developer
              </h2>
              <p className="hero-description">
                Northeastern University student passionate about leveraging data science
                and full-stack development to solve real-world problems. Experienced in
                AI research, municipal systems optimization, and building scalable applications.
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
                <span className="status-badge">🎓 Expected Graduation: Apr 2028</span>
                <span className="status-badge">🇺🇸 U.S. Permanent Resident</span>
                <span className="status-badge">🏆 Dean's List Spring 2025</span>
              </div>

              {/* Call to Action Buttons */}
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={downloadResume}>
                  📄 Download Resume
                </button>
                <button className="btn btn-secondary" onClick={scrollToContact}>
                  💬 Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="hero-social">
                <a
                    href="https://www.linkedin.com/in/bingxian-xie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                  LinkedIn
                </a>
                <a
                    href="https://www.github.com/2426-BingXianXie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                  GitHub
                </a>
                <a
                    href="mailto:xie.bingx@northeastern.edu"
                    className="social-link"
                >
                  Email
                </a>
                <a
                    href="tel:+18572729958"
                    className="social-link"
                >
                  Phone
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-arrow">↓</div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>
  );
};

export default Hero;