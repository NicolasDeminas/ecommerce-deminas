import React, { useState } from "react";
import "./FormularioCompra.css";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const FormularioCompra = ({ cart, total }) => {
  const [formulario, setFormulario] = useState({
    name: "",
    phone: "",
    mail: "",
  });

  const addOrder = async () => {
    const db = getFirestore();
    const order = { buyer: formulario, cart, total };

    const ordersCollection = collection(db, "orders");

    const doc = await addDoc(ordersCollection, order);
    return alert(`Su compra fue realizada con exito!! id de compra: ${doc.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder();
  };

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h5>Formulario compra</h5>
      <form onSubmit={handleSubmit} className='formulario-compra'>
        <label htmlFor='name'>Nombre</label>
        <input type='text' name='name' onChange={handleChange} />
        <label>Telefono</label>
        <input type='text' name='phone' onChange={handleChange} />
        <label>Mail</label>
        <input type='text' name='mail' onChange={handleChange} />
        <input type='submit' />
      </form>
    </div>
  );
};

export default FormularioCompra;
