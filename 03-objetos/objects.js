"use strict";
(() => {
    // //! Se puede especificar una propiedad opcional con el NULLCHECK (?)
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
