import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/home';


function App() {

  const appStyle = {
    //backgroundColor: '#333'
}
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#1C1A1A'}}>
      <Home/>
    </div>
  );
}

export default App;
