import React, { useState, useEffect } from "react";
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

  const consultaApi = async () => {
    const db = getFirestore();
    let itemCollection;
    category
      ? (itemCollection = query(
          collection(db, "items"),
          where("categoryId", "==", category)
        ))
      : (itemCollection = collection(db, "items"));

    const products = await getDocs(itemCollection);
    const arr = [];
    products.docs.map((datos) => {
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
      {loading ? <Loader /> : <ItemList data={data} />}
    </div>
  );
};

export default ItemListContainer;
