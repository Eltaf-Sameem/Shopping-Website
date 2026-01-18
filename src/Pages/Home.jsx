import { useState } from "react";
import { NavBar } from "../components/NavBar"
import "../style/GetAllProducts.css";

export const Home = ({ token }) => {
    const [title, setTitle] = useState("All Products");
    const [searchedProd, setSearchedProd] = useState("");
    const [sortPrice, setSortPrice] = useState("default");
    const [catagory, setCatagory] = useState("all");

    return <>

        <h1 className="cat-title">{title}</h1>
        <div className="filter-div">

            <div className="search-div">
                <label htmlFor="search">
                    <b>Search</b>
                </label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="shirts, rings, etc.."
                    value={searchedProd}
                    onChange={(e) => setSearchedProd(e.target.value)}
                />
            </div>

            <div className="sort-price-div">
                <label htmlFor="sort-price">Sort Price By: </label>
                <select name="sort-price" id="sort-price" onChange={(e) => setSortPrice(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>

            <div className="catagory">
                <button
                    className={`cat-button ${catagory === "all" ? "active-button" : ""}`}
                    onClick={() => {
                        setCatagory("all")
                        setTitle("All Products")
                    }}
                >
                    All
                </button>

                <button
                    className={`cat-button ${catagory === "men" ? "active-button" : ""}`}
                    onClick={() => {
                        setCatagory("men")
                        setTitle("Men's Clothing")
                    }}
                >
                    Men
                </button>

                <button
                    className={`cat-button ${catagory === "women" ? "active-button" : ""}`}
                    onClick={() => {
                        setCatagory("women")
                        setTitle("Women's Clothing")
                    }}
                >
                    Women
                </button>

                <button
                    className={`cat-button ${catagory === "jewelry" ? "active-button" : ""}`}
                    onClick={() => {
                        setCatagory("jewelry")
                        setTitle("Jewelry")
                    }}
                >
                    Jewelry
                </button>

                <button
                    className={`cat-button ${catagory === "electronics" ? "active-button" : ""}`}
                    onClick={() => {
                        setCatagory("electronics")
                        setTitle("Electronics")
                    }}
                >
                    Electronics
                </button>
            </div>
        </div>

        <div className="all-products-div">
            {
                
            }
        </div>


    </>


}