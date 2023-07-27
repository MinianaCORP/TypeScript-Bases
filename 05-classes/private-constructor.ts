// //! El constructor privado ayuda a que solo se cree una instancia ( singleton ), << no se utiliza mucho >>
(() => {

  class Apocalipsis {
    
    static instance: Apocalipsis;

    private constructor( public name: string ) {
    }

    static callApocalipsis( name: string ): Apocalipsis {
      if ( !Apocalipsis.instance ) {
        Apocalipsis.instance = new Apocalipsis( name );
      }

      return Apocalipsis.instance;
    }

    changeName( newName: string ): void {
      this.name = newName;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis( 'Soy el único Apocalipsis' );
  const apocalipsis2 = Apocalipsis.callApocalipsis( 'Soy el segundo Apocalipsis' );
  const apocalipsis3 = Apocalipsis.callApocalipsis( 'Soy el tercer Apocalipsis' );
  
  
  // //! Al crear 3 instancias, solo existe el primero
  // console.log( apocalipsis, apocalipsis2, apocalipsis3 );

  // //! Y si se manipula la primera instancia, se ve reflejado en todas las instancias.
  apocalipsis.changeName( 'Apocalipsis v2' );
  // console.log( apocalipsis, apocalipsis2, apocalipsis3 );
})()