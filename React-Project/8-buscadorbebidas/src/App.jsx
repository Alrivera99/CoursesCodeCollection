import { useState } from "react";
import Formulario from "./components/Formulario";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <header className="py-5">
        <h1> Bebidas</h1>
      </header>
      <Container className="mt-5">
        <Formulario />
      </Container>
    </>
  );
}

export default App;
