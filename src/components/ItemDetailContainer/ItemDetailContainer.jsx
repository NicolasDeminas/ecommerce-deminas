import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import clienteAxios from "../../config/axiosConfig";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // const consultaApi = async () => {
  //   const product = await clienteAxios.get(`/products/${id}`);
  //   setProduct(product.data);
  // };

  const consultaApi = async () => {
    const db = getFirestore();
    const itemCollection = query(
      collection(db, "items"),
      where("__name__", "==", id)
    );
    // const itemCollection = collection(db, "items");
    const products = await getDocs(itemCollection);
    const dataExtraida = products.docs.map((datos) => {
      return setProduct({ id: datos.id, ...datos.data() });
    });
  };

  useEffect(() => {
    consultaApi();
    setLoading(false);
  }, [id]);

  return <div>{loading ? <Loader /> : <ItemDetail data={product} />}</div>;
};

export default ItemDetailContainer;
