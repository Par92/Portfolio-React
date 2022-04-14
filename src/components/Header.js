import React, { useState } from 'react';
import '../styles/style.css';
import About from './Projects/About';
import Work from './Projects/Work';
import Contact from './Projects/Contact';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav>
    <ul>
  
        <a href="#about" onClick={() => handlePageChange('About')}>
          About Me
        </a>
      
        <a href="#work" onClick={() => handlePageChange('Work')}>
          My Work
        </a>

        <a href="#contact" onClick={() => handlePageChange('Contact')}>
          Contact Me
        </a>
      
    </ul>
    </nav>
  );
}

function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
  <>
    <header className="header">
      <h1>Peter's Portfolio</h1>
    </header>
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  </>
  );
}

export default Header;