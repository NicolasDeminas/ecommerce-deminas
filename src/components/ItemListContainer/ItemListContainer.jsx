import React, { useState, useEffect } from "react";
import clienteAxios from "../../config/axiosConfig";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  // const consultaApi = async () => {
  //   if (!category) {
  //     const products = await clienteAxios.get(`/products`);
  //     return setData(products.data);
  //   }
  //   const products = await clienteAxios.get(`/products/category/${category}`);
  //   return setData(products.data);
  // };

  const consultaApi = async () => {
    if (!category) {
      const db = getFirestore();
      const itemCollection = collection(db, "items");
      const products = await getDocs(itemCollection);
      const arr = [];
      const dataExtraida = products.docs.map((datos) => {
        return arr.push({ id: datos.id, ...datos.data() });
      });
      return setData(arr);
    }
    const db = getFirestore();
    const itemCollection = query(
      collection(db, "items"),
      where("categoryId", "==", category)
    );
    const products = await getDocs(itemCollection);
    const arr = [];
    const dataExtraida = products.docs.map((datos) => {
      console.log(`datos: ${datos}`);
      return arr.push({ id: datos.id, ...datos.data() });
    });
    setData(arr);
  };

  useEffect(() => {
    consultaApi();
    setLoading(false);
  }, [category]);

  return (
    <div>
      <h1>{greeting}</h1>
      {/* {console.log(data)} */}
      {loading ? <Loader /> : <ItemList data={data} />}
    </div>
  );
};

export default ItemListContainer;
