import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { useState } from 'react';
import { NavBar } from './components/NavBar';

export const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("capstone-token") || null
  );

  return (
    <>
      <NavBar token={token} />

      <div>
        <Routes>

          <Route path="/" element={<Home token={token} />}>
            
          </Route>

        </Routes>

      </div>
    </>
  )
}

