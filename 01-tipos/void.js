"use strict";
(() => {
    // //! Una función sin retorno es "undefined"
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    const b = callSuperman();
    console.log(a);
    console.log(b);
})();
