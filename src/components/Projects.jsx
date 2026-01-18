import React, { useState } from 'react';
import '../styles/Projects.css';

// Import all project images
import permitSystem1 from '../assets/images/permit-system.png';
import permitSystem2 from '../assets/images/permit-system-2.png';
import diabetesImg from '../assets/images/diabetes-readmission.png';
import aircraftImg1 from '../assets/images/aircraft-incidents-1.png';
import aircraftImg2 from '../assets/images/aircraft-incidents-2.png';
import aircraftImg3 from '../assets/images/aircraft-incidents-3.png';
import calendarImg from '../assets/images/calendar-system.png';
import lightEmAllImg from '../assets/images/light-em-all.png';
import connectionsImg from '../assets/images/connections-game.png';
import ztypeImg from '../assets/images/ztype-game.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState({});
  const [expandedTech, setExpandedTech] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectImageIndices, setProjectImageIndices] = useState({});

  const toggleFeatures = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const toggleTech = (projectId) => {
    setExpandedTech(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const nextImage = (imagesLength) => {
    setCurrentImageIndex((prev) => (prev + 1) % imagesLength);
  };

  const prevImage = (imagesLength) => {
    setCurrentImageIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextProjectImage = (projectId, imagesLength) => {
    setProjectImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength
    }));
  };

  const prevProjectImage = (projectId, imagesLength) => {
    setProjectImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength
    }));
  };

  const goToProjectImage = (projectId, index) => {
    setProjectImageIndices(prev => ({
      ...prev,
      [projectId]: index
    }));
  };

  const projects = [
    {
      id: 1,
      title: "Construction Permit Management System",
      category: "full-stack",
      status: "In Development",
      timeline: "July 2025 - Present",
      type: "Self-Development",
      description: "This full-stack web application addresses the municipal permit processing inefficiencies I identified during my internship at the City of Quincy's Inspectional Services. Having processed over ten thousand permit records manually, I witnessed firsthand the challenges citizens and staff face with outdated systems.",
      detailedDescription: "The system features a comprehensive architecture using Java 21 Spring Boot for the backend and React JavaScript for the frontend, supporting multiple user roles including applicants, inspectors, and administrators. I've integrated R and Python scripts to handle map API requests, enabling real-time address validation and intelligent filtering functionality. The application uses a normalized database schema deployed on Aiven cloud infrastructure, ensuring scalability and reliability. By implementing role-based access control and an intuitive interface, this system transforms a traditionally complex bureaucratic process into a streamlined, user-friendly experience that serves real people with real needs.",
      problem: "Manual permit processing created inefficiencies in handling municipal records and compliance monitoring.",
      solution: "Architecting comprehensive permit management system with scalable multi-user architecture and role-based access control.",
      achievements: [
        "Designed scalable multi-user architecture supporting role-based access control",
        "Integrated R and Python scripts for map API requests enabling address validation and filtering",
        "Building industry-standard application workflow with normalized database schema",
        "Developing comprehensive backend services and responsive frontend interface"
      ],
      technologies: ["Java 21", "Spring Boot", "React", "JavaScript", "h2", "REST API"],
      features: [
        "Role-based access control for applicants, inspectors, and administrators",
        "Real-time address validation using integrated map APIs",
        "Automated workflow tracking from application to approval",
        "Comprehensive dashboard for monitoring permit status",
        "Multi-language support for accessibility",
        "Cloud-deployed database with scalable architecture"
      ],
      github: "https://github.com/2426-BingXianXie/Application",
      demo: null,
      images: [permitSystem1, permitSystem2],
      imageLabels: [
        "Main Dashboard",
        "Permit Application Form"
      ],
      icon: "🏗️",
      priority: "featured"
    },
    {
      id: 2,
      title: "Diabetes Hospital Readmission Analysis",
      category: "data-science",
      status: "Completed",
      timeline: "September 2025 - December 2025",
      type: "Personal Project",
      description: "Interactive data visualization platform analyzing patterns in diabetic patient hospital readmissions. Built to help healthcare administrators identify factors contributing to readmissions and improve patient outcomes while reducing healthcare costs.",
      detailedDescription: "Developed a comprehensive web-based analytics platform using D3.js to analyze survey data from 10,000+ diabetic patient readmissions. The system enables healthcare stakeholders to explore correlations between patient demographics, medication regimens, hospital stay duration, and readmission likelihood through dynamic, interactive visualizations. Features multi-dimensional filtering capabilities, statistical analysis tools, and responsive design for accessibility across devices.",
      problem: "Hospital administrators needed to identify factors contributing to diabetic patient readmissions to reduce costs (readmissions cost U.S. healthcare $17+ billion annually) and improve patient outcomes.",
      solution: "Built interactive data visualization platform with D3.js featuring dynamic scatterplots, filtering capabilities, and statistical correlation analysis to explore readmission patterns.",
      achievements: [
        "Processed and visualized 10,000+ patient records with complex healthcare data including demographics, medications, and clinical outcomes",
        "Implemented D3.js scales, axes, and data binding for multi-dimensional healthcare data visualization",
        "Designed responsive SVG visualizations with interactive tooltips for detailed patient information",
        "Created dynamic filtering system enabling exploration of readmission patterns across age groups, medication types, and prior admission history",
        "Enabled identification of high-risk patient populations and intervention opportunities through visual analytics"
      ],
      technologies: ["JavaScript", "D3.js", "HTML5", "CSS3", "Data Visualization", "Statistical Analysis", "Healthcare Analytics"],
      features: [
        "Interactive scatterplot visualizations with D3.js",
        "Dynamic filtering by demographics and clinical variables",
        "Statistical correlation analysis tools",
        "Responsive design for multiple devices",
        "Custom tooltips with detailed patient information",
        "Multi-dimensional data exploration capabilities",
        "Demographic breakdown visualizations",
        "Healthcare outcomes analysis"
      ],
      github: "https://github.com/2426-BingXianXie/ReadmissionsVisualization",
      demo: "https://2426-bingxianxie.github.io/ReadmissionsVisualization/",
      image: diabetesImg,
      icon: "🏥",
      priority: "standard"
    },
    {
      id: 3,
      title: "Aircraft Incidents Analysis System",
      category: "data-science",
      status: "Completed",
      timeline: "Summer 2025",
      type: "Academic Project - CS3200",
      description: "Comprehensive database system analyzing aircraft incident patterns across temporal trends, airline performance, and severity classifications. Built a normalized 3NF database schema with advanced stored procedures for automated incident management and data integrity validation.",
      detailedDescription: "Designed and implemented a complete database solution using MySQL and R for managing and analyzing aircraft safety incidents. The system features a normalized schema with five interconnected tables (Airlines, Airports, Aircraft, Flights, Incidents), optimized batch loading processes handling thousands of records, and sophisticated business logic through stored procedures. Developed comprehensive data validation scripts ensuring referential integrity and data quality across all operations.",
      problem: "Need for systematic analysis of aircraft incident data requiring normalized database design, efficient data loading, and automated incident management workflows.",
      solution: "Created enterprise-grade database system with normalized 3NF schema, R-based ETL pipelines, stored procedures for business logic, and comprehensive testing frameworks.",
      achievements: [
        "Architected normalized 3NF database schema with proper foreign key relationships and constraints",
        "Developed optimized batch processing pipeline loading thousands of incident records with O(1) foreign key resolution",
        "Implemented advanced stored procedures with transaction handling and dynamic entity creation logic",
        "Created comprehensive testing framework validating data integrity, referential consistency, and quality metrics",
        "Built statistical analysis reports generating insights on temporal trends and airline performance"
      ],
      technologies: ["R", "MySQL", "RMySQL", "DBI", "Data Processing", "Database Design", "ETL", "Statistical Analysis"],
      features: [
        "Normalized 3NF database schema design",
        "Automated ETL pipeline with batch processing",
        "Advanced stored procedures with error handling",
        "Comprehensive data validation and integrity checks",
        "Statistical analysis and visualization",
        "Cloud-deployed on Aiven MySQL infrastructure",
        "Transaction management and rollback capabilities",
        "Multi-table JOIN queries for complex analytics"
      ],
      github: "https://github.com/2426-BingXianXie/Airplane-Incident-Data-Visualization-Reports",
      demo: null,
      images: [aircraftImg1, aircraftImg2, aircraftImg3],
      imageLabels: [
        "Database Schema Overview",
        "Data Analysis Results",
        "Statistical Reports",
        "Performance Metrics"
      ],
      icon: "✈️",
      priority: "standard"
    },
    {
      id: 4,
      title: "Multi-Calendar System",
      category: "desktop",
      status: "Completed",
      timeline: "May 2025 - June 2025",
      type: "Academic Project - CS3500",
      description: "Developed a sophisticated calendar management application designed for complex scheduling environments. The system handles multiple time zones, recurring events, and collaborative scheduling needs through advanced event management algorithms.",
      detailedDescription: "Built with Java 11 using Model-View-Controller architecture, the application demonstrates industry-standard design patterns and software engineering practices. The project showcases my commitment to code quality through test-driven development and pair programming methodologies. The GUI, built with Swing framework, features intuitive navigation, advanced search functionality, and complete CRUD operations for event management. The data persistence layer ensures reliable storage and retrieval of calendar information across sessions.",
      problem: "Need for robust calendar application supporting complex scheduling requirements across different timezones.",
      solution: "Built multi-calendar application using Java with MVC architecture and comprehensive event management.",
      achievements: [
        "Implemented MVC architecture with clean separation of concerns",
        "Developed Model layer with event management and data persistence using design patterns",
        "Created fully functional GUI interface with Swing featuring CRUD operations",
        "Added navigation and search functionality through collaborative pair programming"
      ],
      technologies: ["Java 11", "Swing", "MVC Architecture", "Design Patterns", "GUI Development"],
      features: [
        "MVC architecture with clean separation of concerns",
        "Advanced event management supporting recurring patterns",
        "Multi-timezone support with automatic conversions",
        "Robust data persistence and retrieval mechanisms",
        "Comprehensive unit testing coverage",
        "Collaborative development using pair programming"
      ],
      github: "https://github.com/2426-BingXianXie/Multi-Calendar-System",
      demo: null,
      image: calendarImg,
      icon: "📅",
      priority: "standard"
    },
    {
      id: 5,
      title: "Light Em All Puzzle Game",
      category: "game",
      status: "Completed",
      timeline: "Spring 2025",
      type: "Academic Project - CS2510",
      description: "Interactive electrical circuit puzzle game featuring sophisticated algorithms and game mechanics.",
      problem: "Create an engaging puzzle game that demonstrates complex algorithmic thinking and GUI development skills.",
      solution: "Developed interactive puzzle game using advanced algorithms including Kruskal's algorithm and breadth-first search.",
      achievements: [
        "Implemented minimum spanning tree algorithms (Kruskal's) with Union-Find data structure",
        "Created sophisticated power propagation system using breadth-first search",
        "Built comprehensive game mechanics including rotation control and win condition detection",
        "Developed user-friendly interface with visual feedback and game state management"
      ],
      technologies: ["Java", "JavaLib World", "Algorithms", "Data Structures", "GUI"],
      features: [
        "Procedural maze generation",
        "Power propagation system",
        "Rotation controls",
        "Visual feedback",
        "Game state management",
        "Win condition detection"
      ],
      github: "https://github.com/2426-BingXianXie/LightEmAll-Game",
      demo: null,
      image: lightEmAllImg,
      icon: "💡",
      priority: "standard"
    },
    {
      id: 6,
      title: "Connections Word Game",
      category: "game",
      status: "Completed",
      timeline: "Spring 2025",
      type: "Academic Project - CS2510",
      description: "Digital recreation of the popular word association puzzle game with advanced grouping algorithms.",
      problem: "Implement a complex word association game requiring sophisticated categorization and validation logic.",
      solution: "Built comprehensive game engine with word categorization, validation systems, and intuitive user interface.",
      achievements: [
        "Developed complex word categorization and grouping algorithms",
        "Implemented game validation logic with multiple difficulty levels",
        "Created intuitive user interface with drag-and-drop functionality",
        "Built comprehensive scoring system with progress tracking"
      ],
      technologies: ["Java", "JavaLib World", "Algorithms", "Game Logic", "UI Design"],
      features: [
        "Word categorization algorithms",
        "Multiple difficulty levels",
        "Drag-and-drop interface",
        "Scoring system",
        "Progress tracking",
        "Hint system"
      ],
      github: "https://github.com/2426-BingXianXie/Connections-Game",
      demo: null,
      image: connectionsImg,
      icon: "🔗",
      priority: "standard"
    },
    {
      id: 7,
      title: "ZType Typing Game",
      category: "game",
      status: "Completed",
      timeline: "Spring 2025",
      type: "Academic Project - CS2510",
      description: "Fast-paced typing game with dynamic word generation and real-time performance tracking.",
      problem: "Create an engaging typing game that improves typing skills while providing real-time feedback and scoring.",
      solution: "Developed dynamic typing game with word generation algorithms, collision detection, and comprehensive scoring system.",
      achievements: [
        "Implemented dynamic word generation with collision detection algorithms",
        "Created real-time typing validation and word elimination system",
        "Built comprehensive scoring system with accuracy and speed metrics",
        "Developed progressive difficulty scaling based on player performance"
      ],
      technologies: ["Java", "JavaLib World", "Real-time Systems", "Game Mechanics", "Performance Metrics"],
      features: [
        "Dynamic word generation",
        "Real-time collision detection",
        "Typing validation system",
        "Performance metrics",
        "Progressive difficulty",
        "Score tracking"
      ],
      github: "https://github.com/2426-BingXianXie/ZType-Game",
      demo: null,
      image: ztypeImg,
      icon: "⌨️",
      priority: "standard"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'full-stack', name: 'Full-Stack' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'desktop', name: 'Desktop Apps' },
    { id: 'game', name: 'Games' }
  ];

  const filteredProjects = activeFilter === 'all'
                           ? projects
                           : projects.filter(project => project.category === activeFilter);

  const featuredProject = projects.find(p => p.priority === 'featured');

  return (
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p className="section-subtitle">Showcasing technical expertise and problem-solving skills</p>
          </div>

          {/* Featured Project */}
          {featuredProject && (
              <div className="featured-project">
                <div className="featured-badge">🌟 Featured Project</div>
                <div className="featured-content">
                  <div className="featured-info">
                    <div className="project-header">
                      <div className="project-icon">{featuredProject.icon}</div>
                      <div className="project-meta">
                        <h3>{featuredProject.title}</h3>
                        <div className="project-tags">
                          <span className="status-tag in-development">{featuredProject.status}</span>
                          <span className="type-tag">{featuredProject.type}</span>
                          <span className="timeline-tag">{featuredProject.timeline}</span>
                        </div>
                      </div>
                    </div>

                    <p className="project-description">{featuredProject.description}</p>

                    {featuredProject.detailedDescription && (
                        <p className="project-description detailed">{featuredProject.detailedDescription}</p>
                    )}

                    <div className="project-details">
                      <div className="problem-solution">
                        <div className="detail-section">
                          <h4>🎯 Problem</h4>
                          <p>{featuredProject.problem}</p>
                        </div>
                        <div className="detail-section">
                          <h4>💡 Solution</h4>
                          <p>{featuredProject.solution}</p>
                        </div>
                      </div>

                      <div className="achievements">
                        <h4>🏆 Key Achievements</h4>
                        <ul>
                          {featuredProject.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="project-tech">
                      <h4>🛠️ Technologies Used</h4>
                      <div className="tech-stack">
                        {featuredProject.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions">
                      {featuredProject.github && (
                          <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            View Code
                          </a>
                      )}
                      {featuredProject.demo && (
                          <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Live Demo
                          </a>
                      )}
                    </div>
                  </div>

                  {/* Image Slider */}
                  <div className="featured-image-slider">
                    <div className="slider-container">
                      <img
                          src={featuredProject.images[currentImageIndex]}
                          alt={`${featuredProject.title} - ${featuredProject.imageLabels[currentImageIndex]}`}
                          className="slider-image"
                      />

                      {/* Image Label */}
                      <div className="image-label">
                        {featuredProject.imageLabels[currentImageIndex]}
                      </div>

                      {/* Navigation Buttons */}
                      <button
                          onClick={() => prevImage(featuredProject.images.length)}
                          className="slider-btn prev-btn"
                          aria-label="Previous image"
                      >
                        ←
                      </button>
                      <button
                          onClick={() => nextImage(featuredProject.images.length)}
                          className="slider-btn next-btn"
                          aria-label="Next image"
                      >
                        →
                      </button>
                    </div>

                    {/* Indicator Dots */}
                    <div className="slider-indicators">
                      {featuredProject.images.map((_, idx) => (
                          <button
                              key={idx}
                              onClick={() => goToImage(idx)}
                              className={`indicator-dot ${currentImageIndex === idx ? 'active' : ''}`}
                              aria-label={`Go to image ${idx + 1}`}
                          />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          )}

          {/* Project Filter */}
          <div className="project-filters">
            {categories.map(category => (
                <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.filter(p => p.priority !== 'featured').map(project => (
                <div key={project.id} className="project-card">
                  {/* Project has multiple images (slider) */}
                  {project.images ? (
                      <div className="project-image-slider">
                        <div className="slider-container">
                          <img
                              src={project.images[projectImageIndices[project.id] || 0]}
                              alt={`${project.title} - ${project.imageLabels[projectImageIndices[project.id] || 0]}`}
                              className="slider-image"
                          />

                          <div className="image-label">
                            {project.imageLabels[projectImageIndices[project.id] || 0]}
                          </div>

                          {project.images.length > 1 && (
                              <>
                                <button
                                    onClick={() => prevProjectImage(project.id, project.images.length)}
                                    className="slider-btn prev-btn"
                                    aria-label="Previous image"
                                >
                                  ←
                                </button>
                                <button
                                    onClick={() => nextProjectImage(project.id, project.images.length)}
                                    className="slider-btn next-btn"
                                    aria-label="Next image"
                                >
                                  →
                                </button>
                              </>
                          )}
                        </div>

                        {project.images.length > 1 && (
                            <div className="slider-indicators">
                              {project.images.map((_, idx) => (
                                  <button
                                      key={idx}
                                      onClick={() => goToProjectImage(project.id, idx)}
                                      className={`indicator-dot ${(projectImageIndices[project.id] || 0) === idx ? 'active' : ''}`}
                                      aria-label={`Go to image ${idx + 1}`}
                                  />
                              ))}
                            </div>
                        )}
                      </div>
                  ) : (
                       /* Project has single image */
                       <div className="project-image">
                         <img src={project.image} alt={project.title} />
                         <div className="project-overlay">
                           <div className="project-icon">{project.icon}</div>
                         </div>
                       </div>
                   )}

                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <div className="project-meta">
                    <span className={`status-tag ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    {project.detailedDescription && (
                        <p className="project-description detailed">{project.detailedDescription}</p>
                    )}

                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul className="features-list">
                        {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}

                        {expandedProjects[project.id] && project.features.slice(3).map((feature, idx) => (
                            <li key={idx + 3} className="expanded-feature">{feature}</li>
                        ))}

                        {project.features.length > 3 && (
                            <li className="more-features">
                              <button
                                  onClick={() => toggleFeatures(project.id)}
                                  className="toggle-features-btn"
                              >
                                {expandedProjects[project.id]
                                 ? '− Show less'
                                 : `+${project.features.length - 3} more`}
                              </button>
                            </li>
                        )}
                      </ul>
                    </div>

                    <div className="project-tech-stack">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                      ))}

                      {expandedTech[project.id] && project.technologies.slice(4).map((tech, idx) => (
                          <span key={idx + 4} className="tech-tag expanded-tech">{tech}</span>
                      ))}

                      {project.technologies.length > 4 && (
                          <button
                              onClick={() => toggleTech(project.id)}
                              className="tech-tag toggle-tech-btn"
                          >
                            {expandedTech[project.id]
                             ? '− Less'
                             : `+${project.technologies.length - 4}`}
                          </button>
                      )}
                    </div>

                    <div className="project-actions">
                      {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            View Code
                          </a>
                      )}
                      {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Live Demo
                          </a>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="projects-stats">
            <h3>Project Portfolio Overview</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{projects.length}</div>
                <div className="stat-label">Total Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{new Set(projects.flatMap(p => p.technologies)).size}</div>
                <div className="stat-label">Technologies Used</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{projects.filter(p => p.status === 'Completed').length}</div>
                <div className="stat-label">Completed Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{projects.filter(p => p.status === 'In Development').length}</div>
                <div className="stat-label">In Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Projects;