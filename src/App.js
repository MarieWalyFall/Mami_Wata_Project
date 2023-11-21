import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import History from './pages/History';
import BuyMedication from './pages/BuyMedication';
import BuyTicket from './pages/BuyTicket';
import LoginPage from './pages/LoginPage';
import Conditioning from './pages/Conditioning';
import ListMedication from './pages/ListMedication';
import Mutual from './pages/Mutual';
import Service from './pages/Service';
import Dashboard from './pages/Dashboard';
import Patient from './pages/Patient';
import User from './pages/User';
import Inventory from './pages/Inventory';
import Account from './pages/Account';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/history/:whichPage/:allOpen" element={<History />} />
        <Route path="/listMedication" element={<ListMedication />} />
        <Route path="/conditioning" element={<Conditioning />} />
        <Route path="/mutual" element={<Mutual />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ticketSale" element={<BuyTicket />} />
        <Route path="/medicationSale" element={<BuyMedication />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>  
  );
}

export default App;
