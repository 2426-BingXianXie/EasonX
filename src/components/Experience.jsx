import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Carnegie Mellon University",
      department: "Computer Science Department",
      position: "Summer Intern",
      location: "Remote",
      duration: "August 2023 - October 2023",
      type: "Research Internship",
      description: "Working on Music AI research at Carnegie Mellon University exposed me to the cutting edge of artificial intelligence and machine learning. I contributed to projects focused on synthetic voice generation and music creation, supporting research that pushes the boundaries of what's possible with AI-generated audio.",
      detailedDescription: "My role centered on organizing and preprocessing large-scale audio datasets that would train the next generation of AI music systems. This work required meticulous attention to detail and a deep understanding of how data quality directly impacts model performance. I learned that the unglamorous work of data cleaning, labeling, and validation is actually the foundation upon which impressive AI capabilities are built. Every audio sample I processed, every annotation I verified, contributed to improving the system's ability to understand and generate music.",
      achievements: [
        "Supported Music AI research requiring extensive data preprocessing and phoneme annotation for algorithm training",
        "Participated in Music AI project focusing on data labeling, lyrics extraction, song segmentation, and phoneme duration annotation for voice synthesis research",
        "Contributed 500+ soundtrack samples to advancing AI music generation and voice cloning research through systematic data preparation, audio analysis, and vocal pattern recognition training datasets"
      ],
      technologies: ["Python", "Data Processing", "Audio Analysis", "AI/ML", "Research Methodologies"],
      icon: "🔬",
      skillsDeveloped: "This research position strengthened my understanding of the machine learning pipeline from data to deployment. I gained hands-on experience with audio processing techniques, systematic data organization, and the importance of maintaining high data quality standards. Working in an academic research environment also taught me how to document processes clearly, collaborate with researchers, and think critically about how data choices affect model outcomes. These skills translate directly to any data engineering or machine learning role where preparing and managing large datasets is essential."
    },
    {
      id: 2,
      company: "City of Quincy",
      department: "Inspectional Services",
      position: "Summer Intern",
      location: "Quincy, MA",
      duration: "July 2022 - July 2023",
      type: "Municipal Internship",
      description: "My time at the City of Quincy's Inspectional Services was transformative, opening my eyes to how technology can directly improve government services and citizen experiences. Working at the intersection of public service and data systems, I tackled real challenges that affected thousands of residents and businesses in the community.",
      detailedDescription: "One of my proudest contributions was serving as a Chinese interpreter for over 30 non-English speaking applicants navigating the permit process. These interactions showed me the human side of technology—how digital systems can either create barriers or break them down. Seeing the relief on someone's face when they could finally understand the permitting process motivated me to think deeply about accessibility in every technical solution I build. This experience directly inspired my Construction Permit Management System project, which aims to make municipal services more inclusive by design.",
      achievements: [
        "Optimized municipal permit processing workflow by extracting and analyzing 10,000+ permit records from the OpenGov system, implementing data cleaning protocols and compliance pattern analysis that reduced processing time by 40% and improved departmental efficiency",
        "Enhanced citizen services and regulatory compliance by processing 100+ permit applications through comprehensive blueprint review, building code verification, and project progress tracking while serving as Chinese interpreter for 30+ non-English speaking applicants, improving accessibility and approval timelines",
        "Automated administrative operations and enhanced revenue tracking visibility by developing 10+ VBA macros for comprehensive report generation, enabling management to monitor fee revenue streams, track inspector productivity metrics, and assess departmental progress while eliminating processing bottlenecks and reducing manual errors across multiple permit categories"
      ],
      technologies: ["VBA", "Microsoft Excel", "OpenGov", "Data Analysis", "Process Automation"],
      icon: "🏛️",
      impact: "This internship taught me that effective technology solutions require deep understanding of user needs and workflows. By spending time with inspectors, applicants, and administrators, I learned to identify pain points that weren't obvious from the outside. The 40% reduction in processing time wasn't just a metric—it meant families could start construction projects sooner, businesses could open faster, and city staff could focus on more complex issues requiring human judgment."
    }
  ];

  return (
      <section id="experience" className="experience">
        <div className="experience-container">
          <div className="section-header">
            <h2>Work Experience</h2>
            <p className="section-subtitle">Professional journey and achievements</p>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
                <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <div className="company-info">
                        <div className="company-icon">{exp.icon}</div>
                        <div className="company-details">
                          <h3 className="company-name">{exp.company}</h3>
                          <p className="department">{exp.department}</p>
                        </div>
                      </div>
                      <div className="position-info">
                        <h4 className="position-title">{exp.position}</h4>
                        <div className="experience-meta">
                          <span className="duration">{exp.duration}</span>
                          <span className="location">{exp.location}</span>
                          <span className="type">{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="experience-description">
                      <p>{exp.description}</p>
                      {exp.detailedDescription && (
                          <p className="detailed-description">{exp.detailedDescription}</p>
                      )}
                    </div>

                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="technologies-used">
                      <h5>Technologies & Skills:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Section */}
                    {exp.impact && (
                        <div className="impact-section">
                          <h5>Impact:</h5>
                          <p>{exp.impact}</p>
                        </div>
                    )}

                    {/* Skills Developed Section */}
                    {exp.skillsDeveloped && (
                        <div className="skills-developed-section">
                          <h5>Skills Developed:</h5>
                          <p>{exp.skillsDeveloped}</p>
                        </div>
                    )}

                    {/* Impact Metrics */}
                    <div className="impact-metrics">
                      {exp.id === 1 && (
                          <div className="metrics">
                            <div className="metric">
                              <span className="metric-number">500+</span>
                              <span className="metric-label">Soundtrack Samples</span>
                            </div>
                            <div className="metric">
                              <span className="metric-number">3</span>
                              <span className="metric-label">Months Duration</span>
                            </div>
                          </div>
                      )}
                      {exp.id === 2 && (
                          <div className="metrics">
                            <div className="metric">
                              <span className="metric-number">10,000+</span>
                              <span className="metric-label">Records Analyzed</span>
                            </div>
                            <div className="metric">
                              <span className="metric-number">100+</span>
                              <span className="metric-label">Permits Processed</span>
                            </div>
                            <div className="metric">
                              <span className="metric-number">10+</span>
                              <span className="metric-label">VBA Macros Created</span>
                            </div>
                          </div>
                      )}
                    </div>
                  </div>

                  <div className="timeline-marker">
                    <div className="timeline-date">
                      {exp.duration.split(' - ')[0]}
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="experience-summary">
            <h3>What I've Learned</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">🔍</div>
                <h4>Research & Analysis</h4>
                <p>Developed strong research methodologies and data analysis skills through AI research and municipal data processing.</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">⚡</div>
                <h4>Process Optimization</h4>
                <p>Experienced in identifying inefficiencies and implementing automation solutions to streamline workflows.</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🤝</div>
                <h4>Cross-Functional Collaboration</h4>
                <p>Worked effectively with diverse teams from academic researchers to municipal employees.</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">📊</div>
                <h4>Data-Driven Decision Making</h4>
                <p>Skilled at extracting insights from large datasets to inform strategic decisions and improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Experience;