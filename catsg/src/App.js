import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import Maria from "./Maria";
import Homepage from "./Homepage";
import React from "react";


import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Maria" element={<Maria />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;