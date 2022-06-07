import React from 'react';
//Global Style
import Globalstyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
// Router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <Routes>
        <Route path='/' exact element={<AboutUs />} />
        <Route path='/aboutus' exact element={<AboutUs />} />
        <Route path='/ourwork' exact element={<OurWork />} />
        <Route path='/contactus' exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
