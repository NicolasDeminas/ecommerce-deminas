import React, { useState, useEffect } from "react";
import clienteAxios from "../../config/axiosConfig";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  const consultaApi = async () => {
    if (!category) {
      const products = await clienteAxios.get(`/products`);
      return setData(products.data);
    }
    const products = await clienteAxios.get(`/products/category/${category}`);
    return setData(products.data);
  };

  useEffect(() => {
    consultaApi();
  }, [category]);

  return (
    <div>
      <h1>{greeting}</h1>
      {<ItemList data={data} />}
    </div>
  );
};

export default ItemListContainer;
