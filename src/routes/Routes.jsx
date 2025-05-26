import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { Layout } from '../layouts/Layout.jsx';
import ProductListingPage from '../pages/ProductListingPage.jsx';
import Home from '../pages/Home.jsx';
import { PageNotFound } from '../pages/PageNotFound.jsx';

const AppRoutes = () => {
    return (
    <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    );
};

export default AppRoutes;

//