(() => {

  // //! Crea cascarones para otras clases, no sirve para crear instancias
  abstract class Mutante {
    constructor( public name: string, public realName: string ) {

    }
  }

  class Xmen extends Mutante {
    salvarMundo(): string {
      return 'Mundo a salvo!'
    }
  }
  
  class Villian extends Mutante {
    conquistarMundo(): string {
      return 'Mundo conquistado!';
    }
  }

  class Extra {
  }

  const wolverine = new Xmen( 'Wolverine', 'Logan' );
  const magneto = new Villian( 'Magneto', 'Magnus' );
  const extra = new Extra();

  // console.log( wolverine.salvarMundo() );
  // console.log( magneto.conquistarMundo() );

  const printName = ( character: Mutante ) => {
    // console.log( character );
  }

  // printName( wolverine );
  
  // //! No se puede utilizar un objeto que no extiende de Mutante, para eso también se utiliza el "abstract";
  // printName( extra );

})()