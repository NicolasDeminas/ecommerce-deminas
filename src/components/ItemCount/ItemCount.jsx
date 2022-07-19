import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, setItemCount }) => {
  let [item, setItem] = useState(initial || 0);

  const handleClick = (e) => {
    e.preventDefault();
    if (item > stock) {
      return alert(`No hay stock suficiente`);
    }
    setItemCount(item);
    // return console.log(item);
  };

  const handleSum = (e) => {
    e.preventDefault();
    if (item < stock) {
      return setItem(item + 1);
    }
    return alert(`No hay stock suficiente`);
  };

  const handleRest = (e) => {
    e.preventDefault();
    if (item > 0) {
      return setItem(item - 1);
    }
  };

  return (
    <>
      <div className='itemCount'>
        <form className='itemCount'>
          <button onClick={handleRest}>-</button>
          <input type='number' value={item} />
          <button onClick={handleSum}>+</button>
          <div className='itemCount-submit'>
            <input type='submit' value='Agregar' onClick={handleClick} />
          </div>
        </form>
      </div>
    </>
  );
};

export default ItemCount;
