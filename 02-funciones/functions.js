"use strict";
(() => {
    const hero = 'Flash';
    const returnName = () => {
        return hero;
    };
    const activateBatisignal = () => {
        return 'Batiseñal activada!';
    };
    const heroName = returnName();
    console.log(typeof (activateBatisignal));
})();
