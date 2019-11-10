import React, { Fragment } from "react";
import PrimerComponente from "./components/PrimerComponente";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productos from "./components/Producto";

function App() {
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
       titulo='Tienda Virtual'
      />
      <Productos/>
      <Footer
      fecha= {fecha}
      />
    </Fragment>
  );
}

export default App;
