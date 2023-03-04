"use strict";
(() => {
    let myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 123;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        nombre: "Clark Kent",
        edad: 60,
        poderes: ["Puede correr muy rápido"],
    };
    console.log(myCustomVariable);
})();
