import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout }         from '../layouts/Layout.jsx';
import ProductListingPage from '../pages/ProductListingPage.jsx';
import HomePage           from '../pages/HomePage.jsx';
import { PageNotFound }   from '../pages/PageNotFound.jsx';
import ProductViewPage    from '../pages/ProductViewPage.jsx';
import Login              from '../pages/Login.jsx';

const AppRoutes = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/home"                 element={<Layout />}> {/* Layout como componente pai da rota */}
          <Route index                      element={<HomePage />} /> {/* HomePage renderizada no Outlet do Layout */}
          <Route path="/home/products"      element={<ProductListingPage />} />
          <Route path="/home/products/:id"  element={<ProductViewPage />} />
          {/* Outras rotas que devem usar o Layout podem ser adicionadas aqui */}
        </Route>
        {/* Rotas que não usam o Layout principal (ex: PageNotFound) */}
        <Route path="/"                     element={<Login />} />
        <Route path="*"                     element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    );
};

export default AppRoutes;

//