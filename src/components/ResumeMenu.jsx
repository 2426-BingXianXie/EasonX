import React, { useEffect, useRef, useState } from 'react';
import { FiChevronDown, FiDownload, FiFileText } from 'react-icons/fi';
import { resumes } from '../data/resumes';
import '../styles/ResumeMenu.css';

/**
 * A button that opens a dropdown letting the visitor pick which tailored
 * resume to download (Software Engineering or Data Science / AI & ML).
 *
 * `triggerClassName` lets callers reuse existing button styles
 * (e.g. "header-resume" or "btn btn-primary").
 */
const ResumeMenu = ({ triggerClassName = 'btn btn-primary', label = 'Resume' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
      <div className="resume-menu" ref={menuRef}>
        <button
            type="button"
            className={triggerClassName}
            onClick={() => setIsOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={isOpen}
        >
          <FiDownload aria-hidden="true" />
          <span>{label}</span>
          <FiChevronDown
              aria-hidden="true"
              className={`resume-menu-caret ${isOpen ? 'open' : ''}`}
          />
        </button>

        {isOpen && (
            <div className="resume-menu-dropdown" role="menu">
              <p className="resume-menu-heading">Choose a resume</p>
              {resumes.map((resume) => (
                  <a
                      key={resume.id}
                      href={resume.file}
                      download={resume.download}
                      className="resume-menu-item"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                  >
                    <span className="resume-menu-item-icon"><FiFileText aria-hidden="true" /></span>
                    <span className="resume-menu-item-copy">
                      <strong>{resume.label}</strong>
                      <small>{resume.description}</small>
                    </span>
                  </a>
              ))}
            </div>
        )}
      </div>
  );
};

export default ResumeMenu;
