"use strict";
(() => {
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('auxilio');
})();
