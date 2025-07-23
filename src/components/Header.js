import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import peaceMemoji from '../photos/peace-memoji.png';
import '../styles/Header.css';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='flexRow' id="header">
      <div id="leftHeader">
        <Link to="/" onClick={() => handleLinkClick('/')} id="memoji">
          <img src={peaceMemoji} alt="defaultMemoji" style={{ width: '150px', height: '150px' }} />
        </Link>
      </div>
      <div className="flexRow" id="rightHeader">
        <div>
          <Link
            to="/about"
            className={`headerLink ${activeLink === '/about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
        </div>
        <div>
          <Link
            to="/experience"
            className={`headerLink ${activeLink === '/experience' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/experience')}
          >
            Experience
          </Link>
        </div>
        <div>
          <Link
            to="/projects"
            className={`headerLink ${activeLink === '/projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/projects')}
          >
           Projects
          </Link>
        </div>
        <div>
          <Link
            to="/play"
            className={`headerLink ${activeLink === '/play' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/play')}
          >
            Play
          </Link>
        </div>
        <div>
          <Link
            to="#"
            className={`headerLink ${activeLink === '/resume' ? 'active' : ''}`}
            onClick={() => window.open('https://isadominguez314.github.io/isadominguez-website/WebsiteResume.pdf', '_blank', 'noopener,noreferrer')}
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;