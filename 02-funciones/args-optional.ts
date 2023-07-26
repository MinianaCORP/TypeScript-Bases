(() => {

  const fullName = ( firstname: string, lastName?: string ): string => {
    return `${ firstname } ${ lastName || 'no lastName' }`;
  }

  const name = fullName( 'Tony' );

  console.log({ name });

})()