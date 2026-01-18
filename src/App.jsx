import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { useState } from 'react';
import { NavBar } from './components/NavBar';

export const App = () => {
  const [user, setUser] = useState(
    localStorage.getItem("capstone-user") || "guest"
  );

  const [token, setToken] = useState(
    localStorage.getItem("capstone-token") || null
  );
  const [cart, setCart] = useState(
    // parsing and pulling cart info from local storage if exist
    JSON.parse(localStorage.getItem(`${user}-cart`)) || []
  );

  return (
    <>
      <NavBar token={token} setToken={setToken} cart={cart} setCart={setCart} user={user} setUser={setUser} />

      <div>
        <Routes>

          <Route path="/" element={<Home />}>
          </Route>

        </Routes>

      </div>
    </>
  )
}

