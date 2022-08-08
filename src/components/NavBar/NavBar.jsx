import React, { useState, useEffect, useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const { item } = useContext(CartContext);

  const getCategories = async () => {
    const db = getFirestore();
    const categoriesCollection = collection(db, "categories");
    const categories = await getDocs(categoriesCollection);
    const arr = [];
    categories.docs.map((datos) => {
      return arr.push(datos.data().category);
    });

    setCategories(arr);
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
