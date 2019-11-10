import React, { Component, Fragment } from "react";
import Product from "./Product";

class Productos extends Component {
  state = {
    productos: []
  };

  //se ejecuta una vez que esta cargado todo
  componentDidMount() {
    console.log(1);
  }

  //se ejecuta antes de que el componente se cargue
  componentWillMount() {
    console.log(2);
    this.setState({
      productos: [
        {
          id: 1,
          name: "React"
        },
        {
          id: 2,
          name: "Angular"
        }
      ]
    });
  }

  //se ejecuta cuando el componente es actualizado
  componentWillUpdate() {
    console.log(3);
  }

  componentWillUnmount() {
    console.log(4);
  }

  // se ejecuta cuando se llama el componente
  render() {
    console.log(5);
    const { productos } = this.state;
    console.log(productos);
    return (
      <Fragment>
        <h1>Lista de Productos</h1>
        {productos.map(producto => (
          <Product id={producto.id} producto={producto} />
        ))}
      </Fragment>
    );
  }
}

export default Productos;
