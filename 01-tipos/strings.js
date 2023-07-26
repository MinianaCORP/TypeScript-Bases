"use strict";
(() => {
    var _a, _b;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Linterna Verde`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    // //! Uncaught TypeError:
    // console.log( batman[10].toUpperCase() );
    // //! Usando el NULLCHECK (?) interpreta Undefined
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    // //! Validando
    console.log(((_b = batman[10]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || 'No existe');
})();
