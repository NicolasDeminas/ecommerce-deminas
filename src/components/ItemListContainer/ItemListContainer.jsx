import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import arr from "../../mockData";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const traerProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(arr);
      }, 2000);
    })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
