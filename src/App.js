import React, {Fragment} from "react";

function App() {
  const empleado = {
    nombre: "Juan Pablo",
    trabajo: "Desarrollador"
  };

  return (
    <Fragment>
      <h1>{empleado.nombre}</h1>
      <p>{empleado.trabajo}</p>
    </Fragment>
  );
}

export default App;
