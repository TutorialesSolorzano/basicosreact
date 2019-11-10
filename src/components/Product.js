import React from "react";

const Product = ({ producto, id }) => {
  return (
    <div>
      <h1>ID: {id}</h1>
      <h2>Nombre: {producto.name}</h2>
    </div>
  );
};

export default Product;
