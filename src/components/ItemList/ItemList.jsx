import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ data }) => {
  const arr = data;

  return (
    <div className='list'>
      {arr.map((item) => {
        return (
          <div key={item.id}>
            <Item
              title={item.title}
              pictureUrl={item.pictureUrl}
              description={item.description}
              price={item.price}
              stock={item.stock}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
