import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projec from './components/Projec';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      
      <Projec />
      <About />
      <Contact />
    </div>
  );
}

export default App;
