import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <h7>Tienda</h7>
        </li>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>Categorias</a>
        </li>
        <li>
          <a href='/'>Productos</a>
        </li>
        <li className='login'>
          <a href='/'>
            <CartWidget item='1' />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
