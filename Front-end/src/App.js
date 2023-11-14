import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import History from './pages/History';
import AddMedicationPage from './pages/AddMedicationPage';
import AddTicketPage from './pages/AddTicketPage';
import LoginPage from './pages/LoginPage';
import Conditioning from './pages/Conditioning';
import ListMedicationPage from './pages/ListMedicationPage';
import Mutual from './pages/Mutual';
import Service from './pages/Service';


function App() {
  return (
    //<History whichPage={'pharmacie'} allOpen={true} />
    <ListMedicationPage/>
    //<Conditioning/>
    //<Mutual/>
    //<Service/>
    //<AddTicketPage/>
    //<AddMedicationPage></AddMedicationPage>
    //<LoginPage/>
  )
}

export default App;
