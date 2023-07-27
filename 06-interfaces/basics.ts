(() => {
  // //! Es casi idéntico a un tipo ( type )
  // //! Las interfaces ( interface ) puede ser hija o padre, mas no los tipos ( type )
  interface Hero {
    name:string;
    age?: number;
    powers: string[];
    getName?: () => string
  }

  let flash: Hero = {
    name: 'Barry Allen'
    , age: 24
    , powers: [ 'Súper velocidad', 'Viajar en el tiempo' ]
  }

  let superman: Hero = {
    name: 'Clark Kent'
    , age: 60
    , powers: [ 'Súper velocidad' ]
    , getName() {
      return this.name
    }
  }

  // console.log(flash);
  // console.log(superman);

})()