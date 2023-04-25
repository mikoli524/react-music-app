import React,{useState} from 'react'
import './App.css';

import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="App">
      <div className='Content'>
        <Sidebar setTab={setTab} tab={tab}/>
        <MainContent tab={tab}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
