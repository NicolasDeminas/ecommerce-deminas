import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  return (
    <div className='itemDetail'>
      <h4>{data.title}</h4>
      <img src={data.image} alt={data.title} className='itemDetailImage' />
      <p>{data.description}</p>
    </div>
  );
};

export default ItemDetail;
