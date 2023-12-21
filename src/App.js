import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import TopPage from './components/TopPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{
      backgroundColor: 'dimgray',
      color: 'white',
      minHeight: '100vh',
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><TopPage /><Footer /></>} />
          <Route path="/privacy-policy" element={<><Header /><PrivacyPolicy /><Footer /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


