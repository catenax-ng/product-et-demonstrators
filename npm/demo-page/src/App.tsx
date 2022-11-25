
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Button, Alert, MainNavigation, IconButton } from "cx-portal-shared-components";
import { Box } from '@mui/material';
import { CxHeader } from './generic/header/CxHeader';
import IndexApp from './pages/index/IndexApp';
import DifferentialPrivacyApp from './pages/demos/DifferentialPrivacyApp';
import MultiPartyComputationApp from './pages/demos/MultiPartyComputationApp';
import FederatedLearningApp from './pages/demos/FederatedLearningApp';
import IndexLayout from './pages/layouts/IndexLayout';
import DemosLayout from './pages/layouts/DemosLayout';
import AboutApp from './pages/about/AboutApp';

function App() {

    return (
      <>
        <CxHeader></CxHeader>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexLayout />}>
              <Route index element={<IndexApp />} />

              <Route path="demos" element={<DemosLayout />} >

                <Route index element={<Navigate to="/" />} />
                <Route path="differential-privacy" element={<DifferentialPrivacyApp />} />
                <Route path="multi-party-computation" element={<MultiPartyComputationApp />} />
                <Route path="federated-learning" element={<FederatedLearningApp />} />
              </Route>
              <Route path="about" element={<AboutApp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;
