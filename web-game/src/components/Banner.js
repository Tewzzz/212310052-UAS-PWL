// src/components/Banner.js

import React from 'react';

const Banner = () => {
  const imageUrl = '/d6488cf2f45c9885343e762146989718.png'; // Ganti dengan kode base64 gambar yang sesuai

  const bannerStyle = {
    width: '100%',
    height: '350px',
  };

  return (
    <section className="banner">
      <img src={imageUrl} alt="Game Top Up Store" style={bannerStyle} />
    </section>
  );
};

export default Banner;
