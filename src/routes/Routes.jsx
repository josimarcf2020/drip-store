import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import { Header } from '../components/Header.jsx'; // Removido, pois Layout já o inclui
// import { Footer } from '../components/Footer.jsx'; // Removido, pois Layout já o inclui
import { Layout } from '../layouts/Layout.jsx';
import ProductListingPage from '../pages/ProductListingPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import { PageNotFound } from '../pages/PageNotFound.jsx';

const AppRoutes = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> {/* Layout como componente pai da rota */}
          <Route index element={<HomePage />} /> {/* HomePage renderizada no Outlet do Layout */}
          <Route path="products" element={<ProductListingPage />} />
          {/* Outras rotas que devem usar o Layout podem ser adicionadas aqui */}
        </Route>
        {/* Rotas que não usam o Layout principal (ex: PageNotFound) */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    );
};

export default AppRoutes;

//