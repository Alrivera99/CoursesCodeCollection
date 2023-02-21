"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const active = function () {
        return `${hero} is active`;
    };
    console.log(typeof active);
    const heroName = returnName();
    console.log(heroName);
})();
