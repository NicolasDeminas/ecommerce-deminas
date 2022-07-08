import React, { useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  let [stock, setStock] = useState(10);

  return (
    <div>
      <h1>{greeting}</h1>
      <div className='itemListContainer'>
        <ItemCount stock={stock} initial={1} />
      </div>
    </div>
  );
};

export default ItemListContainer;
