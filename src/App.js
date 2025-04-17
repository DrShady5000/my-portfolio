import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CVPage from './CVPage';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
