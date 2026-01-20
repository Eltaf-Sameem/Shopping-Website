import { useParams } from "react-router-dom";
import "../style/SingleProduct.css"
import { useState } from "react";

export const SingleProduct = ({ prods, cart, setCart }) => {
    //get the selected prod
    const params = useParams();
    const prod = prods
        ? prods.find((product) => product.id === Number(params.id))
        : undefined;

    // Check if prod is already in the cart
    const [inCart, setInCart] = useState(
        cart.find((item) => item.id === prod.id)
    );

    const handleClick = () => {
        if (inCart) {
            const updatedCart = cart.filter((item) => item.id !== prod.id)
            setCart(updatedCart)
        } else {
            setCart((curCart) => {
                const newProd = {
                    ...prod,
                    quantity: prod.quantity || 1,
                };
                return [ ...curCart, newProd ]
            });
        }

        setInCart(!inCart)
    };


    return (
        <>
            {prod ? (
                <div className="single-product-container">

                    <div className="back-button-div">
                        <button className="back-button" onClick={() => history.back()}>
                            Back
                        </button>
                    </div>

                    <div className="single-product-div">
                        <div className="single-product-img-div">
                            <img className="single-product-img" src={prod.image} />
                        </div>

                        <div className="single-product-details-div">
                            <h1>{prod.title}</h1>
                            <br />
                            <h3 className="product-price">${prod.price}</h3>
                            <br />
                            <p>{prod.description}</p>
                            <br />
                            <p>
                                Ratings: {prod.rating.rate} ⭐️ ({prod.rating.count})
                            </p>
                            <br />

                            <div className="buttons2">

                                <div className="buttons1">
                                    <div className="buttons">
                                        <button
                                            className={inCart ? "remove-button" : "simple-button"}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }}
                                        >
                                            {inCart ? "Remove" : "Add to Cart"}

                                        </button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            ) : (
                <h1 className="loading">Loading...</h1>
            )}
        </>
    )
}