import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import PlayerStats from './components/PlayerStats';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/PlayerStats' element={<PlayerStats />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;