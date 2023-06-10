import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PlayListPage from '../components/MainContent/HomePage/PlayListPage';
import HomePage from '../components/MainContent/HomePage/HomePage';

import SearchPage from '../components/MainContent/SearchPage/SearchPage';
import LibraryPage from '../components/MainContent/LIbraryPage/LibraryPage';
import Welcome from '../Welcome';
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
      
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/library' element={<LibraryPage />} />
        <Route path="/playlist/:id" element={<PlayListPage />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default AppRoutes;
