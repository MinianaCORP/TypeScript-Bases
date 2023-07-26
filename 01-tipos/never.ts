(() => {
  // //! Las funciones never desencadenan errores solamente, y lo que pasa luego no es considerado

  const abc = ( message: string ): never => {
    
    console.log('Mensaje estático');
    throw new Error( `The message is ${ message }` )
  }

  abc( 'Hola' );


})()