(() => {

  const hero: string = 'Flash';

  const returnName = (): string => {
    return hero;
  }

  const activateBatisignal = (): string => {
    return 'Batiseñal activada!';
  }

  const heroName = returnName();

  console.log( typeof(activateBatisignal) );

})()