import React, { useState } from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  const [tab, setTab] = useState('home');

  return (
    <BrowserRouter>
      <div className="App">
        <div className='Content'>
          <Sidebar setTab={setTab} tab={tab} />
          <MainContent tab={tab} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
