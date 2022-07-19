import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [itemCount, setItemCount] = useState();

  return (
    <div className='itemDetail'>
      <h4>{data.title}</h4>
      <img src={data.image} alt={data.title} className='itemDetailImage' />
      <p>{data.description}</p>
      {itemCount ? (
        <button>
          <Link to='/cart'>Finalizar compra</Link>
        </button>
      ) : (
        <ItemCount setItemCount={setItemCount} stock={10} initial={0} />
      )}
    </div>
  );
};

export default ItemDetail;
