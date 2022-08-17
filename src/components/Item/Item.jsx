import React from "react";
import "./Item.css";

const Item = ({ title, pictureUrl, price }) => {
  return (
    <>
      <div className='item'>
        <h4 className='itemTitle'>{title}</h4>
        <img src={pictureUrl} alt='imagen' width='100' />
        <p className='item_p'>${price}</p>
      </div>
    </>
  );
};

export default Item;
