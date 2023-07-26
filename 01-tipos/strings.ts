(() => {

  const batman: string = 'Batman';
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Linterna Verde`;

  console.log( `I'm ${ batman }` );
  console.log( batman.toUpperCase() );

  // //! Uncaught TypeError:
  // console.log( batman[10].toUpperCase() );
  
  // //! Usando el NULLCHECK (?) interpreta Undefined
  console.log( batman[10]?.toUpperCase() );

  // //! Validando
  console.log( batman[10]?.toUpperCase() || 'No existe' );


})()