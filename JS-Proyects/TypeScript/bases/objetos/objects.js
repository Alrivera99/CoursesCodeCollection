"use strict";
(() => {
    let flash = {
        nombre: "Barry Allen",
        edad: 24,
        poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
    };
    let superman = {
        nombre: "Clark Kent",
        edad: 60,
        poderes: ["Puede correr muy rapido"]
    };
    // flash = {
    //     nombre: "Clark Kent",
    //     edad: 500,
    //     poderes: ["Puede volar"],
    //     getName() {
    //         return this.nombre;
    //     }
    // }
    console.log(flash.getName());
})();
