// src/components/FeaturedProducts.js

import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css'; // Import file CSS untuk featured products

const FeaturedProducts = () => {
  // Contoh data produk
  const products = [
    { id: 1, name: 'Mobile Legends', image: '/1718174411_43691a8a2975299ac5e9.png' },
    { id: 2, name: 'Valorant', image: '/1718163387_dbe0c56fdc916c825160.png' },
    { id: 3, name: 'League Of Legends', image: '/1718178524_2eba5ad2cc01c36be8b2.png' },
  ];

  return (
    <section id="featured-products" className="featured-products">
      <div className="container">
        <h2>Games</h2>
        <div className="product-list">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
