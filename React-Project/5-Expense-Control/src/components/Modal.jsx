import React from "react";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animar, setAnimar }) => {
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CerrarBtn}
          alt="Cerrar Modal"
          onClick={() => (setModal(false), setAnimar(false))}
        />
      </div>
      <form className={`formulario ${animar ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  );
};

export default Modal;
