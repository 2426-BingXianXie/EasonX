import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/assets/documents/Eason_Xie_Resume.pdf';
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
                  src="/assets/images/profile-photo.jpg"
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
                  <span className="stat-number">3.6</span>
                  <span className="stat-label">GPA</span>
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
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                  LinkedIn
                </a>
                <a
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                  GitHub
                </a>
                <a
                    href="mailto:2153366728xie@gmail.com"
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

        </div>
      </section>
  );
};

export default Hero;