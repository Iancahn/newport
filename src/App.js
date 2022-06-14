import React from 'react';
//Global Style
import Globalstyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import ProjectDetail from './pages/ProjectDetail';
// Router
import { Routes, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<AboutUs />} />
          <Route path='/work' exact element={<OurWork />} />
          <Route path='/work/:id' exact element={<ProjectDetail />} />
          <Route path='/contact' exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
