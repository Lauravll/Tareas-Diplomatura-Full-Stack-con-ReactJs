import React from 'react';
import HomePage from '../../pages/HomePage';
import PerdidosPage from '../../pages/PerdidosPage';
import ConsejosPage from '../../pages/ConsejosPage';
import NovedadesPage from '../../pages/NovedadesPage';
import { NavLink, BrowserRouter, Route, Routes } from 'react-router-dom';

const Nav = () => {
  return (
    <BrowserRouter>
      <NavLink
        exact
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
      </NavLink>
      <NavLink
        to="/perdidos"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <NavLink
          to="/consejos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
        </NavLink>
      </NavLink>
      <NavLink
        to="/novedades"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
      </NavLink>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perdidos" element={<PerdidosPage />} />
        <Route path="/consejos" element={<ConsejosPage />} />
        <Route path="/novedades" element={<NovedadesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Nav;
