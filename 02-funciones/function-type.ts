(() => {

  const addNumbers = ( a: number, b: number ) => a + b;
  const greet = ( name: string ) => `Hola ${ name }`;
  const saveTheWorld = () => `El mundo está salvado`;

  // //! Esto es una variable de tipo "Function" sin nigun tipo de especificación, por ello, no tira error en ninguna ejecución
  let myFunction: Function;
  myFunction = addNumbers;
  console.log( myFunction(1, 2) );

  myFunction = greet;
  console.log( myFunction( 'Yoel' ) );

  myFunction = saveTheWorld;
  console.log( myFunction() );

  // //! Aquí se especifica el tipo de parámetro que recibe y la salida, OJO, el nombre de los argumentos es irrelevante.
  let specificAddNumbers: ( first: number, second: number ) => number;
  specificAddNumbers = addNumbers;
  console.log( specificAddNumbers(1, 2) );


  let specificGreet: ( first: string ) => string;
  specificGreet = greet;
  console.log( specificGreet( 'Yoel' ) );


  let specificSaveTheWorld: () => string;
  specificSaveTheWorld = saveTheWorld;
  console.log( specificSaveTheWorld() );

  



})()