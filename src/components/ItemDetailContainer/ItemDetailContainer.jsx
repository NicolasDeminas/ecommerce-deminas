import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import clienteAxios from "../../config/axiosConfig";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const consultaApi = async () => {
    const product = await clienteAxios.get(`/products/${id}`);
    setProduct(product.data);
  };

  useEffect(() => {
    consultaApi();
    setLoading(false);
  }, [id]);

  return <div>{loading ? <Loader /> : <ItemDetail data={product} />}</div>;
};

export default ItemDetailContainer;
