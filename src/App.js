import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import TabContent from './component/Tabs/TabContent';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<TabContent />} />
        </Routes>
    </Router>
    </>
    
  );
}

export default App;
