// src/components/Header.js

import React from 'react';
import './Header.css'; // Import file CSS untuk header
import { Link, useLocation } from 'react-router-dom'; // Gunakan Link dari react-router-dom

const Header = () => {
  const location = useLocation();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  const handleScrollToFeaturedProducts = (e) => {
    e.preventDefault();
    const featuredProductsSection = document.getElementById('featured-products');
    if (featuredProductsSection) {
      featuredProductsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFooter = (e) => {
    e.preventDefault();
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          TEW STORE {/* Nama toko */}
        </div>
        <nav>
          <ul>
            <li><a href="/" onClick={handleScrollToTop}>Home</a></li>
            <li><a href="/#featured-products" onClick={handleScrollToFeaturedProducts}>Games</a></li>
            <li><Link to="/register">Daftar</Link></li>
            {/* Gunakan event handler untuk scroll ke footer */}
            <li><a href="/#" onClick={handleScrollToFooter}>About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
