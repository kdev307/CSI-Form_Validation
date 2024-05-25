import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './FormComponent';
import Success from './Success';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
