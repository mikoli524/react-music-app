import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Welcome from './Welcome';
import AppRoutes from './routes';

function App() {
  return (
    // <BrowserRouter>

    //   <div className="App">
    //     <div className='Content'>
    //       <Sidebar />
    //       <MainContent />
    //     </div>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/*' element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
