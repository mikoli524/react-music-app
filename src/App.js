import React from 'react'
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <MainUI />
    </>
  );
}

function MainUI() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <MainContent />
        <Footer />
    </div>
  );                    
}

export default App;
