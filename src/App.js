import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import LivingTrust from './pages/LivingTrust';
import RevocableTrust from './pages/RevocableTrust';
import IrrevocableTrust from './pages/IrrevocableTrust';
import SpecialNeedsTrust from './pages/SpecialNeedsTrust';
import LifeInsuranceTrust from './pages/LifeInsuranceTrust';
import CharitableTrust from './pages/CharitableTrust';
import ProbateAdministration from './pages/ProbateAdministration';
import ProbateLitigation from './pages/ProbateLitigation';
import WillContest from './pages/WillContest';
import EstateAdministration from './pages/EstateAdministration';
import AssetProtection from './pages/AssetProtection';
import Conservatorship from './pages/Conservatorship';
import Guardianship from './pages/Guardianship';
import About from './pages/About';
import Contact from './pages/Contact';
import ClientPortal from './pages/ClientPortal';
import Questionnaires from './pages/Questionnaires';
import DocumentLibrary from './pages/DocumentLibrary';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/living-trust" element={<LivingTrust />} />
            <Route path="/revocable-trust" element={<RevocableTrust />} />
            <Route path="/irrevocable-trust" element={<IrrevocableTrust />} />
            <Route path="/special-needs-trust" element={<SpecialNeedsTrust />} />
            <Route path="/life-insurance-trust" element={<LifeInsuranceTrust />} />
            <Route path="/charitable-trust" element={<CharitableTrust />} />
            <Route path="/probate-administration" element={<ProbateAdministration />} />
            <Route path="/probate-litigation" element={<ProbateLitigation />} />
            <Route path="/will-contest" element={<WillContest />} />
            <Route path="/estate-administration" element={<EstateAdministration />} />
            <Route path="/asset-protection" element={<AssetProtection />} />
            <Route path="/conservatorship" element={<Conservatorship />} />
            <Route path="/guardianship" element={<Guardianship />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/questionnaires" element={<Questionnaires />} />
            <Route path="/document-library" element={<DocumentLibrary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
