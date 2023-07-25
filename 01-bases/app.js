"use strict";
//hay problemas si es que existen variables con el mismo nombre en JS y TS
// //!Un poco de teoría
//terminal-> tsc nombrearchivo -> para convertir un archivo a js
//terminal-> tsc init -> para generar la configuración de TS ( tsconfig.json )
//terminal-> tsc -> para convertir todos los archivos ts a js
//terminal-> tsc --w -> para que entre en estado observable y que haga la conversión automática.
(() => {
    // //! Evitar los any
    const a = 10;
    // tsconfig.json -> "noImplicitAny": true -> exige tipado
    function salHello(msg) {
        return msg;
    }
})();
