import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ data }) => {
  const arr = data;

  return (
    <div className='list'>
      {arr.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
              <Item
                title={item.title}
                pictureUrl={item.imageId}
                price={item.price}
                stock={item.stock}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
