import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Import the new Homepage component
// import Sidebar from './components/Sidebar'; // Commented out - remove if you want full new design
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar commented out to use new navigation from Homepage */}
        {/* <Sidebar /> */}
        
        {/* Removed main-content wrapper since Homepage has its own layout */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={
            <div style={{padding: '2rem', textAlign: 'center', marginTop: '100px'}}>
              <h1>Page Coming Soon</h1>
              <p>This page is under construction.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
