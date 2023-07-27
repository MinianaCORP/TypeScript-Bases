(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson'
    , ironman: 'Robert Downey Jr.'
    , vision: 'Paul Bettany'
    , activo: true
    , poder: 1500
  }

  // //!No importa el orden
  const { poder, vision } = avengers;
  console.log( poder.toFixed(2), vision.toUpperCase() );

  const printAvenger = ( { ironman, ...resto }: Avengers ) => {
    console.log( ironman, resto );
  }

  printAvenger( avengers );


  // //!Importa el orden
  const avengersArr: string[] = [ 'Cap. América', 'Ironman', 'Hulk' ];

  const [ cap, ironman, ] = avengersArr;

  console.log({ cap, ironman });

})()