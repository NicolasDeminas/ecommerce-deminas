import React, { useState, useEffect } from "react";
import clienteAxios from "../../config/axiosConfig";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
  }, [category]);

  return (
    <div>
      <h1>{greeting}</h1>

      {loading ? <Loader /> : <ItemList data={data} />}
    </div>
  );
};

export default ItemListContainer;
