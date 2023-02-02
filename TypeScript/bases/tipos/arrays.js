"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.push('Loki');
    villians.forEach(villain => {
        console.log(villain.toUpperCase());
    });
})();
