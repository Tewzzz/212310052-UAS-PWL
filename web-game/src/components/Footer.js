// src/components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  // Nomor WhatsApp yang ingin Anda arahkan pengguna untuk mengirim pesan
  const whatsappNumber = '+6281802048180';

  // Fungsi untuk membuka tautan WhatsApp
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <footer id="footer" className="footer-container">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>TEW TOPUP</h3>
            <p>Nikmati layanan top up game online murah dan tercepat di TEW TOPUP.</p>
          </div>
          <div className="footer-right">
            <h3>Social Media</h3>
            <ul className="social-links">
              <li><a href="https://www.instagram.com/m4tthewww_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" onClick={handleWhatsAppClick}>WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">&copy; Copyright © 2023 TEW TOPUP. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
