import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import OrganSection from './components/OrganSection.tsx';
import OrganDetail from './components/OrganDetail.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
            <div className="snap-start"><Hero /></div>
            <div className="snap-start"><About /></div>
            <div className="snap-start"><OrganSection /></div>
          </div>
        } />
        <Route path="/organ/:organ" element={<OrganDetail />} />
      </Routes>
    </Router>
  );
}

export default App;