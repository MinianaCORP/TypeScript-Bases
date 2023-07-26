(() => {

  const fullName = ( firstname: string, lastName?: string, upper: boolean = false ): string => {
    if ( upper ) {
      return `${ firstname } ${ lastName || 'no lastName' }`.toUpperCase();
    }
    return `${ firstname } ${ lastName || 'no lastName' }`;
  }

  const name = fullName( 'Tony', 'Stark', true );

  console.log({ name });

})()