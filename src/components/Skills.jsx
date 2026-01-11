import React, { useState, useEffect } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [animatedValues, setAnimatedValues] = useState({});

  let skillCategories;
  skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        {
          name: "Python",
          level: 90,
          experience: "3+ years",
          description: "NumPy, Pandas, Data Analysis"
        },
        {
          name: "Java",
          level: 85,
          experience: "2+ years",
          description: "Spring Boot, OOP, Desktop Apps"
        },
        {
          name: "JavaScript",
          level: 80,
          experience: "2 years",
          description: "React, ES6+, DOM Manipulation"
        },
        {
          name: "R",
          level: 75,
          experience: "2 years",
          description: "Statistical Analysis, Data Visualization"
        },
        {name: "MySQL", level: 70, experience: "1+ years", description: "Database Design, Queries"},
        {name: "VBA", level: 65, experience: "1 year", description: "Excel Automation, Macros"}
      ]
    },
    frameworks: {
      title: "Frameworks & Technologies",
      icon: "🛠️",
      skills: [
        {
          name: "React",
          level: 80,
          experience: "1+ years",
          description: "Component-based Development"
        },
        {
          name: "Spring Boot",
          level: 75,
          experience: "1+ years",
          description: "RESTful APIs, Microservices"
        },
        {
          name: "Git",
          level: 85,
          experience: "2+ years",
          description: "Version Control, Collaboration"
        },
        {
          name: "Docker",
          level: 65,
          experience: "6 months",
          description: "Containerization, Deployment"
        },
        {
          name: "Maven",
          level: 70,
          experience: "1+ years",
          description: "Build Automation, Dependencies"
        },
        {name: "Swing", level: 75, experience: "1+ years", description: "GUI Development"}
      ]
    },
    dataScience: {
      title: "Data Science & Analytics",
      icon: "📊",
      skills: [
        {
          name: "Statistical Analysis",
          level: 85,
          experience: "2+ years",
          description: "Hypothesis Testing, Regression"
        },
        {
          name: "Data Visualization",
          level: 80,
          experience: "2+ years",
          description: "Charts, Graphs, Dashboards"
        },
        {
          name: "Data Cleaning",
          level: 90,
          experience: "2+ years",
          description: "Preprocessing, ETL Pipelines"
        },
        {
          name: "Data Processing",
          level: 85,
          experience: "2+ years",
          description: "Large Datasets, Automation"
        },
        {name: "NumPy", level: 80, experience: "2+ years", description: "Numerical Computing"},
        {
          name: "Pandas",
          level: 85,
          experience: "2+ years",
          description: "Data Manipulation, Analysis"
        }
      ]
    },
    tools: {
      title: "Development Tools & Software",
      icon: "⚙️",
      skills: [
        {
          name: "IntelliJ IDEA",
          level: 85,
          experience: "2+ years",
          description: "Primary IDE for Java/Spring"
        },
        {
          name: "Visual Studio Code",
          level: 80,
          experience: "2+ years",
          description: "Web Development, Python"
        },
        {name: "R Studio", level: 75, experience: "2+ years", description: "Statistical Computing"},
        {
          name: "MySQL Workbench",
          level: 70,
          experience: "1+ years",
          description: "Database Administration"
        },
        {
          name: "Microsoft Excel",
          level: 90,
          experience: "3+ years",
          description: "Advanced Functions, VBA"
        },
        {name: "OpenGov", level: 75, experience: "1 year", description: "Municipal Data Systems"}
      ]
    },
    soft: {
      title: "Professional Skills",
      icon: "🤝",
      skills: [
        {
          name: "Problem Solving",
          level: 90,
          experience: "Ongoing",
          description: "Analytical Thinking, Debugging"
        },
        {
          name: "Team Collaboration",
          level: 85,
          experience: "Multiple projects",
          description: "Pair Programming, Communication"
        },
        {
          name: "Research Skills",
          level: 80,
          experience: "CMU Experience",
          description: "AI Research, Data Collection"
        },
        {
          name: "Process Optimization",
          level: 85,
          experience: "Quincy Internship",
          description: "Workflow Improvement"
        },
        {
          name: "Documentation",
          level: 75,
          experience: "All projects",
          description: "Technical Writing, Code Comments"
        },
        {
          name: "Mentoring",
          level: 70,
          experience: "Tutoring",
          description: "Teaching, Knowledge Transfer"
        }
      ]
    }
  };

  // Animate skill bars when component mounts or category changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedValues = {};
      skillCategories[activeCategory].skills.forEach(skill => {
        newAnimatedValues[skill.name] = skill.level;
      });
      setAnimatedValues(newAnimatedValues);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory, skillCategories]);

  const getLevelColor = (level) => {
    if (level >= 85) return '#10B981'; // Green for expert
    if (level >= 75) return '#3B82F6'; // Blue for advanced
    if (level >= 65) return '#F59E0B'; // Yellow for intermediate
    return '#EF4444'; // Red for beginner
  };

  const getLevelText = (level) => {
    if (level >= 85) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 65) return 'Intermediate';
    return 'Beginner';
  };

  return (
      <section id="skills" className="skills">
        <div className="skills-container">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <p className="section-subtitle">Comprehensive overview of technical expertise and proficiencies</p>
          </div>

          {/* Skills Navigation */}
          <div className="skills-nav">
            {Object.entries(skillCategories).map(([key, category]) => (
                <button
                    key={key}
                    className={`nav-btn ${activeCategory === key ? 'active' : ''}`}
                    onClick={() => setActiveCategory(key)}
                >
                  <span className="nav-icon">{category.icon}</span>
                  <span className="nav-text">{category.title}</span>
                </button>
            ))}
          </div>

          {/* Skills Content */}
          <div className="skills-content">
            <div className="category-header">
              <h3>
                <span className="category-icon">{skillCategories[activeCategory].icon}</span>
                {skillCategories[activeCategory].title}
              </h3>
            </div>

            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="skill-header">
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-experience">{skill.experience}</span>
                      </div>
                      <div className="skill-level-badge" style={{ backgroundColor: getLevelColor(skill.level) }}>
                        {getLevelText(skill.level)}
                      </div>
                    </div>

                    <p className="skill-description">{skill.description}</p>

                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                              width: `${animatedValues[skill.name] || 0}%`,
                              backgroundColor: getLevelColor(skill.level)
                            }}
                        ></div>
                      </div>
                      <span className="progress-text">{skill.level}%</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="skills-summary">
            <h3>Skills Overview</h3>
            <div className="summary-stats">
              <div className="stat-item">
                <div className="stat-number">
                  {Object.values(skillCategories).reduce((total, cat) => total + cat.skills.length, 0)}
                </div>
                <div className="stat-label">Total Skills</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  {Object.values(skillCategories).reduce((total, cat) =>
                                                             total + cat.skills.filter(skill => skill.level >= 85).length, 0)}
                </div>
                <div className="stat-label">Expert Level</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  {Object.values(skillCategories).reduce((total, cat) =>
                                                             total + cat.skills.filter(skill => skill.level >= 75).length, 0)}
                </div>
                <div className="stat-label">Advanced+</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Categories</div>
              </div>
            </div>
          </div>

          {/* Technical Expertise Highlights */}
          <div className="expertise-highlights">
            <h3>Core Expertise Areas</h3>
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon">🐍</div>
                <h4>Data Science & Python</h4>
                <p>
                  Expert-level proficiency in Python for data analysis, processing, and visualization.
                  Extensive experience with NumPy, Pandas, and statistical analysis from academic
                  coursework and CMU research internship.
                </p>
                <div className="highlight-skills">
                  <span>Python</span>
                  <span>NumPy</span>
                  <span>Pandas</span>
                  <span>Data Analysis</span>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">☕</div>
                <h4>Full-Stack Java Development</h4>
                <p>
                  Strong foundation in Java programming with experience in Spring Boot, MVC architecture,
                  and GUI development. Currently building enterprise-level applications with modern
                  frameworks and design patterns.
                </p>
                <div className="highlight-skills">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>MVC</span>
                  <span>GUI Development</span>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">⚛️</div>
                <h4>Modern Web Development</h4>
                <p>
                  Proficient in modern JavaScript and React for building responsive, user-friendly
                  web applications. Experience with component-based architecture and modern development
                  practices.
                </p>
                <div className="highlight-skills">
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Web Development</span>
                  <span>UI/UX</span>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">📊</div>
                <h4>Data Analysis & Visualization</h4>
                <p>
                  Extensive experience in data processing, statistical analysis, and visualization
                  from real-world internships processing 10,000+ records and contributing to AI
                  research with 500+ samples.
                </p>
                <div className="highlight-skills">
                  <span>R</span>
                  <span>Statistical Analysis</span>
                  <span>Data Visualization</span>
                  <span>Excel/VBA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Journey */}
          <div className="learning-journey">
            <h3>Continuous Learning</h3>
            <p>
              As a dedicated student and developer, I'm constantly expanding my skill set through
              coursework, personal projects, and real-world applications. My diverse experience spans
              from AI research to municipal data systems, giving me a unique perspective on how
              technology can solve real-world problems.
            </p>
            <div className="journey-highlights">
              <div className="journey-item">
                <span className="journey-icon">🎓</span>
                <span>Academic Excellence - Dean's List Achievement</span>
              </div>
              <div className="journey-item">
                <span className="journey-icon">🔬</span>
                <span>Research Experience - CMU AI Music Generation</span>
              </div>
              <div className="journey-item">
                <span className="journey-icon">🏛️</span>
                <span>Real-world Impact - Municipal Process Optimization</span>
              </div>
              <div className="journey-item">
                <span className="journey-icon">🚀</span>
                <span>Innovation - Full-stack Application Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;