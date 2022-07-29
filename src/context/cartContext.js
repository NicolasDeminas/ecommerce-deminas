import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    countItems();
    calculateTotal();
    console.log(cart);
  }, [cart, item]);

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      return alert(`Ya esta en el carrito`);
    }
    setCart([...cart, { ...item, cantidad }]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const countItems = () => {
    if (cart.length > 0) {
      cart.reduce((acc, curr) => {
        const acumulado = acc + curr.cantidad;
        setItem(acumulado);
        return acumulado;
      }, 0);
    }
  };

  const calculateTotal = () => {
    if (cart.length > 0) {
      cart.reduce((acc, curr) => {
        const acumulado = acc + curr.cantidad * curr.price;
        setTotal(acumulado);
        return acumulado;
      }, 0);
    }
  };

  const removeItem = (id) => {
    const products = cart.filter((prod) => prod.id !== id);
    return setCart(products);
  };

  const clear = () => {
    return setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, clear, item, total }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
