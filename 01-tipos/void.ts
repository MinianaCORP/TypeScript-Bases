(() => {
  
  // //! Una función sin retorno es "undefined"
  function callBatman(): void {
    return;
  }

  const callSuperman = (): void => {
    return;
  }

  const a = callBatman();
  const b = callSuperman();
  
  console.log( a );
  console.log( b );

})()