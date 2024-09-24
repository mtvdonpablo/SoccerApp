import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import InputAge from './pages/InputAge';
import InputNum from './pages/InputNum';
import PickSkill from './pages/PickSkill';
import DisplayDrills from './pages/DisplayDrills';
import { AppProvider } from './AppContext';  // Import the provider

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inputage" element={<InputAge />} />
            <Route path="/inputnum" element={<InputNum />} />
            <Route path="/pickskill" element={<PickSkill />} />
            <Route path="/displaydrills" element={<DisplayDrills />} />
          </Routes>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
