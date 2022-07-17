import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import clienteAxios from "../../config/axiosConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const consultaApi = async () => {
    const product = await clienteAxios.get(`/products/${id}`);
    setProduct(product.data);
  };

  useEffect(() => {
    consultaApi();
  }, [id]);

  return (
    <div>
      <ItemDetail data={product} />
    </div>
  );
};

export default ItemDetailContainer;
