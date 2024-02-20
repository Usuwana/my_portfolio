import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/home';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from './screens/projects';
import { Contact } from './screens/contact';
import { Header } from './components/header';
import {Loading} from './components/loading';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const appStyle = {
    //backgroundColor: '#333'
}

useEffect(() => {
  // Simulate loading for 2 seconds
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
}, []);

  return (
    <div className="App">
       {isLoading ? (
        <Loading />
       ) : (
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Header />}> */}
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            {/* </Route> */}
          </Routes>
       </BrowserRouter>
       )
      }
    
  
    </div>
  );
}

export default App;
