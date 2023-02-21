"use strict";
(() => {
    function callBatman() {
        console.log('Batiseñal activada');
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
