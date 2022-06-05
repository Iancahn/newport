import React from 'react';
//Global Style
import Globalstyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      <Globalstyle />
    </div>
  );
}

export default App;
