import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './Pages/Home';
import { SingleProduct } from "./Pages/SingleProduct"
import { fetchAllProds } from "/src/api/api.js";

export const App = () => {
  const [user, setUser] = useState(
    localStorage.getItem("capstone-user") || "guest"
  );

  const [token, setToken] = useState(
    localStorage.getItem("capstone-token") || null
  );

  //-----------home--------------
  const [prods, setProds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [searchedProd, setSearchedProd] = useState("");
  const [sortPrice, setSortPrice] = useState("default");
  useEffect(() => {
    async function getAllProds() {
      const result = await fetchAllProds();
      setProds(result);
      setLoading(false);
    }
    getAllProds();
  }, []);

  //filtering the prods based on category
  const filteredCategory =
    prods ?
      (
        category === "all" ? prods : prods.filter((product) => product.category === category)
      )
      : [];

  //filtering the prods based on searchedProd
  const filteredProds = filteredCategory.filter(
    (product) =>
      product.description
        .toLowerCase()
        .includes(searchedProd.toLocaleLowerCase()) ||
      product.title.toLowerCase().includes(searchedProd.toLowerCase())
  );

  //sorting prods based on sort filter
  if (sortPrice === "asc") {
    filteredProds.sort((a, b) => a.price - b.price);
  } else if (sortPrice === "desc") {
    filteredProds.sort((a, b) => b.price - a.price);
  }
  //------------------


  const [cart, setCart] = useState(
    // parsing and pulling cart info from local storage if exist
    JSON.parse(localStorage.getItem(`${user}-cart`)) || []
  );

  return (
    <>
      <NavBar token={token} setToken={setToken} cart={cart} setCart={setCart} user={user} setUser={setUser} />

      <div>
        <Routes>

          <Route path="/" element={<Home
            cart={cart} setCart={setCart} loading={loading} category={category} setCategory={setCategory}
            setSearchedProd={setSearchedProd} filteredProds={filteredProds} setSortPrice={setSortPrice} 
          />} />

          <Route path="/products/:id" element={<SingleProduct prods={prods} cart={cart} setCart={setCart} />} />



        </Routes>

      </div>
    </>
  )
}

