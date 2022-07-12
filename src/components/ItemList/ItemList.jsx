import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = () => {
  const arr = [
    {
      id: 1,
      title: "Coca-Cola",
      description: "Bebida sin alcohol",
      price: 150,
      pictureUrl:
        "https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000",
      stock: 10,
    },
    {
      id: 2,
      title: "Sprite",
      description: "Bebida sin alcohol",
      price: 150,
      pictureUrl:
        "https://jumboargentina.vtexassets.com/arquivos/ids/682853/Gaseosa-Sprite-Lima-lim-n-1-5-L-2-248096.jpg?v=637764969686070000",
      stock: 10,
    },
    {
      id: 3,
      title: "Fanta",
      description: "Bebida sin alcohol",
      price: 150,
      pictureUrl:
        "https://depotexpress.com.ar/tienda/wp-content/uploads/2020/05/FANTA-NARANJA-X-1.5L.png",
      stock: 10,
    },
    {
      id: 4,
      title: "Cerveza Quilmes",
      description: "Bebida con alcohol",
      price: 150,
      pictureUrl:
        "https://pulperiaquilapan.com/wp-content/uploads/2014/08/quilmes.jpg",
      stock: 10,
    },
  ];

  return (
    <div className='list'>
      {arr.map((item) => {
        return (
          <div key={item.id}>
            <Item
              title={item.title}
              pictureUrl={item.pictureUrl}
              description={item.description}
              price={item.price}
              stock={item.stock}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
