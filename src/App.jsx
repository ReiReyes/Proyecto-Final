import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // useNavigate no es necesario aquí
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;