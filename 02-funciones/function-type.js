"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    // //! Esto es una variable de tipo "Function" sin nigun tipo de especificación, por ello, no tira error en ninguna ejecución
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Yoel'));
    myFunction = saveTheWorld;
    console.log(myFunction());
    // //! Aquí se especifica el tipo de parámetro que recibe y la salida, OJO, el nombre de los argumentos es irrelevante.
    let specificAddNumbers;
    specificAddNumbers = addNumbers;
    console.log(specificAddNumbers(1, 2));
    let specificGreet;
    specificGreet = greet;
    console.log(specificGreet('Yoel'));
    let specificSaveTheWorld;
    specificSaveTheWorld = saveTheWorld;
    console.log(specificSaveTheWorld());
})();
