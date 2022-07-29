import React, { useState, useEffect, useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import clienteAxios from "../../config/axiosConfig";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const { cart, item } = useContext(CartContext);

  const getCategories = async () => {
    const categories = await clienteAxios.get(`/products/categories`);
    setCategories(categories.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <nav>
      <ul>
        {/* <li>
          <h6>Tienda</h6>
        </li> */}
        <li>
          <NavLink to='/'>
            <h4>Home</h4>
          </NavLink>
        </li>
        {categories.map((category) => {
          return (
            <li key={category}>
              <NavLink to={`/category/${category}`}>{category}</NavLink>
            </li>
          );
        })}
        <li className='login'>
          <NavLink to='/cart'>
            <CartWidget item={item} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
