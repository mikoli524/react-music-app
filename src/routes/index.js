import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlayListPage from '../components/MainContent/HomePage/PlayListPage';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/playlist/:id" element={<PlayListPage />} />
      </Routes>
  );
}

export default AppRoutes;
