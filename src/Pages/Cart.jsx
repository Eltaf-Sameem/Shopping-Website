import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Cart.css";

export const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate();
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += (item.price * item.quantity)
        })
        setGrandTotal(total);
    }, [cart])

    function incrementQty(id) {
        setCart((curCart) =>
            curCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }

    function decrementQty(id) {
        setCart((curCart) =>
            curCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: (item.quantity > 1 ? item.quantity - 1 : 1) }
                    : item
            )
        )
    }

    function removeProd(id) {
        setCart((curCart) =>
            curCart.filter((item) => item.id !== id)
        )
    }

    function purchase() {
        alert("Thank you for shopping with us!")
        setCart([])
    }


    return (
        <div className="cart-canvas">
            {cart.length > 0 ? (
                <>
                    {cart.map((prod) => (
                        <div className="cart-item-div" key={prod.id}>

                            <div className="cart-item-img-div">
                                <img
                                    src={prod.image}
                                    className="cart-item-img"
                                    onClick={() => navigate(`/products/${prod.id}`)}
                                />
                            </div>

                            <h4 className="cart-item-title" onClick={() => navigate(`/products/${prod.id}`)}>
                                {prod.title}
                            </h4>

                            <p className="cart-item-price">${prod.price}</p>

                            <div className="cart-item-qty-div">
                                Qty:
                                <button className="increament-button qty-buttons" onClick={() => { incrementQty(prod.id) }}>+</button>
                                <p className="item-qty">{prod.quantity}</p>
                                <button className="decreament-button qty-buttons" onClick={() => { decrementQty(prod.id) }}>-</button>
                            </div>

                            <div className="button-div">
                                <button className="remove-button" onClick={() => { removeProd(prod.id) }}>
                                    Remove
                                </button>
                            </div>

                            <h4 className="cart-item-subtotal">
                                Total: ${(prod.price * prod.quantity).toFixed(2)}
                            </h4>

                        </div>
                    ))}

                    <div className="checkout-div">
                        <div className="checkout-button-div">
                            <div className="checkout-button-div2">
                                <button className="simple-button checkout-button" onClick={purchase}>
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>

                        <div className="grand-total-div">
                            <h3 className="grand-total">{`Grand Total: $${grandTotal.toFixed(2)}`}</h3>
                        </div>
                    </div>

                </>

            ) : (

                <h1>Cart is Empty</h1>
            )}
        </div>




    )

}