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
        <Route path="/" element={<LoginPage />} />
        <Route path="/history/:userId" element={<History />} />
        <Route path="/listMedication/:userId" element={<ListMedication />} />
        <Route path="/conditioning/:userId" element={<Conditioning />} />
        <Route path="/mutual/:userId" element={<Mutual />} />
        <Route path="/service/:userId" element={<Service />} />
        <Route path="/ticketSale/:userId" element={<BuyTicket />} />
        <Route path="/medicationSale/:userId" element={<BuyMedication />} />
        <Route path="/dashboard/:userId" element={<Dashboard />} />
        <Route path="/patient/:userId" element={<Patient />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/dashboard/:userId" element={<Dashboard />} />
        <Route path="/inventory/:userId" element={<Inventory />} />
        <Route path="/account/:userId" element={<Account />} />
      </Routes>
    </Router>  
  );
}

export default App;
