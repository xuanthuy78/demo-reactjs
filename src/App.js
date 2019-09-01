import React from 'react';
import './App.css';
import MasterLayout from './components/layout/masterLayout/MasterLayout';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <MasterLayout></MasterLayout>
    </Router>
  );
}

export default App;
