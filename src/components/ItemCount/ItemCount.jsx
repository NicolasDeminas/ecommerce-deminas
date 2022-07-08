import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  let [item, setItem] = useState(initial || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item > stock) {
      return alert(`No hay stock suficiente`);
    }
    return console.log(item);
  };

  const handleSum = () => {
    if (item < stock) {
      return setItem(item + 1);
    }
    return alert(`No hay stock suficiente`);
  };

  const handleRest = () => {
    if (item > 0) {
      return setItem(item - 1);
    }
  };

  return (
    <>
      <div className='itemCount'>
        <form onSubmit={handleSubmit} className='itemForm'>
          <button onClick={handleRest}>-</button>
          <input type='number' value={item} />
          <button onClick={handleSum}>+</button>
          <input type='submit' />
        </form>
      </div>
    </>
  );
};

export default ItemCount;
