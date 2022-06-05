import React from 'react';
//Global Style
import Globalstyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <Globalstyle />
    </div>
  );
}

export default App;
