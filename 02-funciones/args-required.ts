(() => {

  const fullName = ( firstname: string, lastName: string ): string => {
    return `${ firstname } ${ lastName }`;
  }

  const name = fullName( 'Tony', 'Stark' );

  console.log({ name });

})()