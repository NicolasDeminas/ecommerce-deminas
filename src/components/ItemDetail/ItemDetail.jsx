import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [itemCount, setItemCount] = useState();
  const { addToCart } = useContext(CartContext);

  const onAdd = (itemCount) => {
    setItemCount(itemCount);
    addToCart(data, itemCount);
  };

  return (
    <div className='itemDetail'>
      <h4>{data.title}</h4>
      <img src={data.imageId} alt={data.title} className='itemDetailImage' />
      <p>{data.description}</p>
      {itemCount ? (
        <button>
          <Link to='/cart'>Finalizar compra</Link>
        </button>
      ) : (
        <ItemCount onAdd={onAdd} stock={10} initial={0} />
      )}
    </div>
  );
};

export default ItemDetail;
