import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './views/Home';
import Timeline from './views/Timeline';
import Simulation from './views/Simulation';
import DefenseArsenal from './views/DefenseArsenal';
import Myths from './views/Myths';
import DZScams from './views/DZScams';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/arsenal" element={<DefenseArsenal />} />
          <Route path="/myths" element={<Myths />} />
          <Route path="/dz-scams" element={<DZScams />} />
        </Routes>
      </Layout>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Mobile safe area fix for navbar */
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </Router>
  );
}

export default App;