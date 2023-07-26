"use strict";
(() => {
    // //! Aquí se indicó que el arreglo puede ser entero o string
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const varios = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    // //! Por lo que no se puede agregar otro tipo de dato.
    // numeros.push(true);
    // //! Para lograrlo necesito especificar los tipos de datos
    const varios2 = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    varios2.push(false);
    const villians = ['Duende verde', 'Normamu', 'El suegro'];
    numeros.forEach(number => console.log(number.toFixed()));
    villians.forEach(villian => console.log(villian.toUpperCase()));
})();
