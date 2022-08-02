import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cart, removeItem, total } = useContext(CartContext);

  return (
    <div>
      {cart.map((prod) => {
        return (
          <div className='products' key={prod.id}>
            <img src={prod.imageId} alt={prod.description} width='45px' />
            <h3>{prod.title}</h3>
            <h4>{prod.cantidad}</h4>
            <h4>${prod.price}-</h4>
            <h4>${prod.cantidad * prod.price}</h4>

            <button
              onClick={() => {
                removeItem(prod.id);
              }}
            >
              Eliminar
            </button>
          </div>
        );
      })}
      <h3>Total compra: ${total}-</h3>
    </div>
  );
};

export default Cart;
