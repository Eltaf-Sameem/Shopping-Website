import { useState } from "react";
import { ProductItem } from "../components/ProductItem.jsx";
import "../style/GetAllProducts.css";

export const Home = ({
    cart, setCart, loading, category, setCategory, searchedProd, setSearchedProd, filteredProds, setSortPrice
}) => {

    const [title, setTitle] = useState("All Products");

    return (
        <>


            {loading ? (
                <h2 className="loading">Loading...</h2>
            ) : (
                <>
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

                        <div className="category">
                            <button
                                className={`cat-button ${category === "all" ? "active-button" : ""}`}
                                onClick={() => {
                                    setCategory("all")
                                    setTitle("All Products")
                                }}
                            >
                                All
                            </button>

                            <button
                                className={`cat-button ${category === "men's clothing" ? "active-button" : ""}`}
                                onClick={() => {
                                    setCategory("men's clothing")
                                    setTitle("Men's Clothing")
                                }}
                            >
                                Men
                            </button>

                            <button
                                className={`cat-button ${category === "women's clothing" ? "active-button" : ""}`}
                                onClick={() => {
                                    setCategory("women's clothing")
                                    setTitle("Women's Clothing")
                                }}
                            >
                                Women
                            </button>

                            <button
                                className={`cat-button ${category === "jewelery" ? "active-button" : ""}`}
                                onClick={() => {
                                    setCategory("jewelery")
                                    setTitle("Jewelry")
                                }}
                            >
                                Jewelry
                            </button>

                            <button
                                className={`cat-button ${category === "electronics" ? "active-button" : ""}`}
                                onClick={() => {
                                    setCategory("electronics")
                                    setTitle("Electronics")
                                }}
                            >
                                Electronics
                            </button>
                        </div>
                    </div>

                    <div className="all-products-div">
                        {filteredProds.length > 0 ? (
                            filteredProds.map((product) => {
                                return (
                                    <ProductItem
                                        key={product.id}
                                        product={product}
                                        cart={cart}
                                        setCart={setCart}
                                    />
                                );
                            })
                        ) : (
                            <h1>Out of inventory</h1>
                        )}
                    </div>

                </>
            )}


        </>
    );
}