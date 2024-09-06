import React from 'react';
import Navbar from '/src/components/Navbar.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;