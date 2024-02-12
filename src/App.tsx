import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/home';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from './screens/projects';
import { Contact } from './screens/contact';
import { Header } from './components/header';


function App() {

  const appStyle = {
    //backgroundColor: '#333'
}
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Header />}> */}
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            {/* </Route> */}
          </Routes>
       </BrowserRouter>
    
  
    </div>
  );
}

export default App;
