import React from 'react';
import HeaderComponent from './components/headerComponent';
import '../src/styles/App.css';
import ListComponent from './components/listComponent';

function App() {
  return (
    <div className='app'>
    <HeaderComponent />
    <ListComponent/>
    </div>
  );
}

export default App;
