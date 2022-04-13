// import React, { useState } from 'react';
// import '../styles/style.css';
// import Navbar from './Navbar';
// import About from './pages/About';
// import Work from './pages/Work';
// import Contact from './pages/Contact';


// function Project() {
//   const [currentPage, setCurrentPage] = useState('Work');

//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Work') {
//       return <Work />;
//     }
//     if (currentPage === 'Contact') {
//       return <Contact />;
//     }
//     return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//   <>
//     <header className="header">
//       <h1>Peter's Portfolio</h1>
//     </header>
//     <div>
//       <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//     </div>
//   </>
//   );
// }

// export default Project;
