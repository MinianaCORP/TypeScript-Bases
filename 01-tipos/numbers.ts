(() => {
  // //! NaN es considerado un número, 
  let avengers: number = 10;
  let villians: number = 20;
  

  avengers = Number( '22A' );

  // //! Esto da un NaN, igual se compara, se debe validar
  console.log(avengers); 
  
  if (avengers < villians) {
    console.log( 'Estamos en problemas' );
  } else {
    console.log( 'Estamos salvados' );
  }

})()