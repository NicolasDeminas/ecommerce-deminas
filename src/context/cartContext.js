import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      return alert(`Ya esta en el carrito`);
    }
    setCart([...cart, { ...item, cantidad }]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const removeItem = (id) => {};

  const clear = () => {
    return setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clear }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
