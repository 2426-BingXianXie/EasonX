import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
      <section id="about" className="about">
        <div className="about-container">
          <div className="section-header">
            <h2>About Me</h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <div className="about-intro">
                <h3>Hello! I'm Eason (BingXian) Xie</h3>
                <p>
                  I'm a Data Science and Mathematics student at Northeastern University's Khoury College
                  of Computer Science. With a 3.65 GPA and recognition on the Dean's List, I'm passionate
                  about leveraging technology to solve real-world problems that make a meaningful impact
                  on people's lives.
                </p>
              </div>

              <div className="about-journey">
                <h4>My Journey</h4>
                <p>
                  My journey in technology has been shaped by diverse experiences, from conducting AI
                  research at Carnegie Mellon University to streamlining municipal operations at the
                  City of Quincy's Inspectional Services. These experiences taught me that the most
                  powerful applications of technology are those that bridge the gap between complex
                  systems and the people who use them. As a bilingual professional fluent in both
                  English and Chinese, I bring a unique perspective to building inclusive, accessible
                  solutions.
                </p>
              </div>

              <div className="about-experience">
                <h4>Professional Experience</h4>
                <p>
                  I specialize in full-stack development, data engineering, and AI applications, with
                  hands-on experience in Java, Python, JavaScript, and modern frameworks like Spring
                  Boot and React. My technical skills are complemented by a strong foundation in
                  statistical analysis, data visualization, and test-driven development practices.
                  Whether I'm architecting a permit management system to address municipal inefficiencies
                  or contributing to cutting-edge Music AI research, I focus on creating solutions that
                  are both technically robust and genuinely useful.
                </p>
              </div>

              <div className="about-passion">
                <h4>What Drives Me</h4>
                <p>
                  Currently, I'm actively seeking co-op positions where I can apply my skills in data
                  engineering, AI applications, and full-stack development to projects that matter. I'm
                  particularly interested in roles within healthcare, energy infrastructure, and sports
                  analytics—industries where data-driven solutions can drive significant positive change.
                </p>
              </div>

              <div className="about-goals">
                <h4>Looking Forward</h4>
                <p>
                  Beyond academics and professional work, I enjoy playing billiards and badminton,
                  activities that have taught me the value of strategy, precision, and continuous
                  improvement. As I continue my studies and prepare for graduation in April 2028, I'm
                  excited to expand my expertise and contribute to meaningful projects that make a
                  difference.
                </p>
              </div>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🎓</div>
                <h4>Education</h4>
                <p>B.S. Data Science & Mathematics</p>
                <p>Northeastern University</p>
                <span className="highlight-detail">GPA: 3.65/4.0 | Dean's List</span>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">🔬</div>
                <h4>Research Experience</h4>
                <p>AI Music Generation</p>
                <p>Carnegie Mellon University</p>
                <span className="highlight-detail">500+ samples contributed</span>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">💼</div>
                <h4>Industry Experience</h4>
                <p>Data Analysis & Process Optimization</p>
                <p>City of Quincy</p>
                <span className="highlight-detail">10,000+ records processed</span>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">🛠️</div>
                <h4>Technical Skills</h4>
                <p>Full-Stack Development</p>
                <p>Data Science & Analytics</p>
                <span className="highlight-detail">Python, Java, JavaScript, R</span>
              </div>
            </div>
          </div>

          <div className="personal-interests">
            <h4>Beyond Coding</h4>
            <p>
              When I'm not coding or analyzing data, I enjoy staying active through various sports
              including tennis, table tennis, swimming, badminton, and working out at the gym.
              I also enjoy playing billiards, which helps me develop strategic thinking and precision.
            </p>

            <div className="interests-tags">
              <span className="interest-tag"> Tennis</span>
              <span className="interest-tag"> Table Tennis</span>
              <span className="interest-tag">‍️ Swimming</span>
              <span className="interest-tag"> Badminton</span>
              <span className="interest-tag"> Fitness</span>
              <span className="interest-tag"> Billiards</span>
            </div>
          </div>

          <div className="about-cta">
            <h4>Let's Connect!</h4>
            <p>
              I'm always interested in discussing new opportunities, collaborating on projects,
              or simply connecting with fellow developers and data enthusiasts.
            </p>
            <button
                className="btn btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
  );
};

export default About;