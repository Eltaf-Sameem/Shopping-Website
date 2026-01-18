import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/NavBar.css";

export function NavBar({ token }) {

    const [user, setUser] = useState(
        localStorage.getItem("capstone-user") || "guest"
    );


    const [cart, setCart] = useState(
        // parsing and pulling cart info from local storage if exist
        JSON.parse(localStorage.getItem(`${user}-cart`)) || []
    );

    //update cart if user changes
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem(`${user}-cart`)) || []);
    }, [user]);

    //update stored cart if cart changes
    useEffect(() => {
        localStorage.setItem(`${user}-cart`, JSON.stringify(cart));
    }, [cart]);



    let cartQty = cart.reduce((total, item) => total + Number(item.quantity), 0);



    return (
        <div className="nav-bar-div">

            <h1>Sameem Store</h1>
            <div className="nav-links-div">

                <NavLink to={"/"}> Home </NavLink>

                {token ? (<NavLink to={"/login"} onClick={handleLogout}>Logout</NavLink>)
                    : (<NavLink to={"/login"}>Login</NavLink>)
                }

                <div className="nav-cart-icon">
                    <NavLink to={"/cart"} className={"cart-link"}>
                        <ShoppingCart />
                        {<sub className="cart-qty">{cartQty}</sub>}
                    </NavLink>
                </div>

            </div>

        </div>
    )
}

