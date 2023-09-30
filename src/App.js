import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import History from './pages/History';
function App() {
  return (
    <History whichPage={'pharmacie'} allOpen={true} />
  )
}

export default App;
