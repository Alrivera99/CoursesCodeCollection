"use strict";
(() => {
    let flash = {
        nombre: "Barry Allen",
        edad: 24,
        poderes: ["Puede correr muy rápido", "Viajar por el tiempo"]
    };
    let superman = {
        nombre: "Clark Kent",
        edad: 60,
        poderes: ["Puede correr muy rápido"],
        getName() {
            return this.nombre;
        }
    };
})();
