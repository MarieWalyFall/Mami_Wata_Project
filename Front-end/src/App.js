import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import History from './pages/History';
import FilterComponent from './components/FilterComponent';
import AddMedicationPage from './pages/AddMedicationPage';
import AddTicketPage from './pages/AddTicketPage';
import LoginPage from './pages/LoginPage';
import Conditioning from './pages/Conditioning';

function App() {
  return (
    //<History whichPage={'pharmacie'} allOpen={true} />
    <Conditioning/>
    // <AddTicketPage/>
    // <AddMedicationPage></AddMedicationPage>
    // <LoginPage/>


    
    
  )
}

export default App;
