import React from "react";

function App() {
  return (
   /*  <div className="App">
      <hi> Hola Mundo </hi>{" "}
    </div> */
    React.createElement(
        'h1',
        {id: 'heading', className: 'heading'},
        'Hola ...'
    )
  );
}

export default App;
