import { useState } from "react";

import Formulario from "./components/Formulario";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>Busqueda de letras de canciones</header>
      <Formulario />

      <main></main>
    </>
  );
}

export default App;
