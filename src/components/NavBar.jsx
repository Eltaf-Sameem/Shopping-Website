import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/NavBar.css";

export function NavBar({ token, setToken, cart, setCart, user, setUser }) {

    //update cart if user changes
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem(`${user}-cart`)) || []);
    }, [user]);

    //update stored cart if cart changes
    useEffect(() => {
        localStorage.setItem(`${user}-cart`, JSON.stringify(cart));
    }, [cart]);



    let cartQty = cart.reduce((total, item) => total + Number(item.quantity), 0);

    function handleLogout() {
        localStorage.removeItem("capstone-token");
        setToken(null);
        setUser("guest");
        localStorage.setItem("capstone-user", "guest");
        useNavigate("/login");
    }



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
                        {cart.length > 0 && <sub className="cart-qty">{cartQty}</sub>}
                    </NavLink>
                </div>

            </div>

        </div>
    )
}

