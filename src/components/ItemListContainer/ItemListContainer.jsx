import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import arr from "../../mockData";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(arr);
    }, 3000);
  });

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
