import React from 'react'
import './App.css';
import { BrowserRouter, } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';

import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

// import Welcome from './Welcome';
// import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <div className='Content'>
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/welcome' element={<Welcome />} />
    //     <Route path='/*' element={<AppRoutes />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
