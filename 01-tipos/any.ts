(() => {

  let avenger: any = 123;
  
  // //! Si no se asigna un valor, por defecto es any
  let exist;


  // //! No se puede colocar any para constantes
  // const nuevo;
  
  let power;

  avenger = 'Dr Strange';

  console.log( avenger.charAt(0) );
  
  console.log( ( avenger as string ).charAt(0) );
  console.log( <string>avenger.charAt(0) );

})()