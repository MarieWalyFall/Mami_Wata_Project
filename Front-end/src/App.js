import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';

import History from './pages/History';
import AddMedicationPage from './pages/AddMedicationPage';
import AddTicketPage from './pages/AddTicketPage';
import LoginPage from './pages/LoginPage';
import Conditioning from './pages/Conditioning';
import ListMedication from './pages/ListMedication';
import Mutual from './pages/Mutual';
import Service from './pages/Service';
import Dashboard from './pages/Dashboard';


function App() {
  return (
<Router>
      <Routes>
        <Route path="/history/:whichPage/:allOpen" element={<History />} />
        <Route path="/listMedication" element={<ListMedication />} />
        <Route path="/conditioning" element={<Conditioning />} />
        <Route path="/mutual" element={<Mutual />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ticketSale" element={<AddTicketPage />} />
        <Route path="/medicationSale" element={<AddMedicationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>  );
}

export default App;
