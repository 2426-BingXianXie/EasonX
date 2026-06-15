import React from 'react';
import {
  FiClock,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTarget,
  FiUsers,
  FiZap
} from 'react-icons/fi';
import '../styles/Contact.css';
import { resumes } from '../data/resumes';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'xie.bingx@northeastern.edu',
      link: 'mailto:xie.bingx@northeastern.edu',
      description: 'Send me an email'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '(857) 272-9958',
      link: 'tel:+18572729958',
      description: 'Call or text me'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Boston, MA',
      link: null,
      description: 'Northeastern University'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bingxian-xie',
      link: 'https://www.linkedin.com/in/bingxian-xie',
      description: 'Professional network'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'github.com/2426-BingXianXie',
      link: 'https://www.github.com/2426-BingXianXie',
      description: 'Code repositories'
    }
  ];

  const quickActions = [
    {
      icon: FiDownload,
      title: 'Resume — Software Engineering',
      description: 'General software engineering roles',
      link: resumes[0].file,
      color: 'blue',
      download: resumes[0].download
    },
    {
      icon: FiDownload,
      title: 'Resume — Data Science / AI & ML',
      description: 'Data science, AI & machine learning roles',
      link: resumes[1].file,
      color: 'blue',
      download: resumes[1].download
    },
    {
      icon: FiMail,
      title: 'Email Me',
      description: 'xie.bingx@northeastern.edu',
      link: 'mailto:xie.bingx@northeastern.edu',
      color: 'green'
    },
    {
      icon: FiLinkedin,
      title: 'Connect on LinkedIn',
      description: 'Let\'s network',
      link: 'https://www.linkedin.com/in/bingxian-xie',
      color: 'purple'
    },
    {
      icon: FiPhone,
      title: 'Schedule a Call',
      description: '(857) 272-9958',
      link: 'tel:+18572729958',
      color: 'amber'
    }
  ];

  return (
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">
              Let's connect and discuss opportunities, projects, or just have a conversation about technology and data science!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="contact-cards-grid">
            {contactInfo.map((info, index) => {
              const InfoIcon = info.icon;
              return (
                  <div key={index} className="contact-card">
                    <div className="contact-card-icon"><InfoIcon aria-hidden="true" /></div>
                    <div className="contact-card-content">
                      <h4>{info.label}</h4>
                      <p className="contact-description">{info.description}</p>
                      {info.link ? (
                          <a href={info.link} className="contact-value" target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                            {info.value}
                          </a>
                      ) : (
                           <span className="contact-value">{info.value}</span>
                       )}
                    </div>
                  </div>
              );
            })}
          </div>

          {/* Availability Section */}
          <div className="availability-section">
            <div className="availability-card">
              <div className="availability-icon"><FiClock aria-hidden="true" /></div>
              <div className="availability-content">
                <h3>Availability</h3>
                <div className="availability-details">
                  <div className="availability-item">
                    <strong>Status:</strong>
                    <span className="status-badge active">Actively Seeking Opportunities</span>
                  </div>
                  <div className="availability-item">
                    <strong>Expected Graduation:</strong>
                    <span>April 2028</span>
                  </div>
                  <div className="availability-item">
                    <strong>Seeking:</strong>
                    <span>Co-op positions, Internships, Entry-level roles</span>
                  </div>
                  <div className="availability-item">
                    <strong>Interests:</strong>
                    <span>Data Science, Full-Stack Development, AI/ML</span>
                  </div>
                  <div className="availability-item">
                    <strong>Response Time:</strong>
                    <span>Usually within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions-section">
            <h3>Quick Actions</h3>
            <div className="quick-actions-grid">
              {quickActions.map((action, index) => {
                const ActionIcon = action.icon;
                return (
                    <a
                        key={index}
                        href={action.link}
                        className={`quick-action-card ${action.color}`}
                        target={action.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        download={action.download || undefined}
                    >
                      <div className="quick-action-icon"><ActionIcon aria-hidden="true" /></div>
                      <h4>{action.title}</h4>
                      <p>{action.description}</p>
                    </a>
                );
              })}
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="looking-for-section">
            <div className="looking-for-grid">
              <div className="looking-for-card">
                <div className="card-icon"><FiTarget aria-hidden="true" /></div>
                <h4>What I'm Looking For</h4>
                <ul>
                  <li>Data Science internships and co-ops</li>
                  <li>Full-stack development opportunities</li>
                  <li>Research positions in AI/ML</li>
                  <li>Collaborative projects</li>
                </ul>
              </div>

              <div className="looking-for-card">
                <div className="card-icon"><FiZap aria-hidden="true" /></div>
                <h4>How I Can Help</h4>
                <ul>
                  <li>Data analysis and visualization</li>
                  <li>Web application development</li>
                  <li>Process optimization</li>
                  <li>Research assistance</li>
                </ul>
              </div>

              <div className="looking-for-card">
                <div className="card-icon"><FiUsers aria-hidden="true" /></div>
                <h4>Let's Collaborate</h4>
                <ul>
                  <li>Open-source projects</li>
                  <li>Educational content</li>
                  <li>Technical documentation</li>
                  <li>Student mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
