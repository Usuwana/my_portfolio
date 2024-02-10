import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import { FindMe } from './components/findme';

function App() {

  const appStyle = {
    //backgroundColor: '#333'
}
  return (
    <div>
      <Header/>
      <Main/>
      <FindMe/>
      <Footer/>
    </div>
  );
}

export default App;
