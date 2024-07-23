// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<><Banner /><FeaturedProducts /><Footer /></>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Tambahkan rute lain di sini */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
