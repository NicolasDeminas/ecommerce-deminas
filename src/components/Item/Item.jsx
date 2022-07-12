import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ title, pictureUrl, description, price, stock }) => {
  return (
    <>
      <div className='item'>
        <h4 className='itemTitle'>{title}</h4>
        <img src={pictureUrl} alt='imagen' width='100' />
        <p className='item_p'>{description}</p>
        <p className='item_p'>${price}</p>
        <ItemCount initial={1} stock={stock} />
      </div>
    </>
  );
};

export default Item;
