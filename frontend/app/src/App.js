import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import CafeSearchPage from './components/CafeSearchPage'; // 追加: カフェ検索ページへのインポート
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/logout" element={<Logout />} /> 
          <Route path="/search" element={<CafeSearchPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
