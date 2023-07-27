// //! Private, solo dentro de la clase
// //! Protected, dentro de la clase o su padre

(() => {

  class Avenger {
    constructor( public name: string, public realName: string ) {
      // console.log( 'Constructor Avenger llamado!' );
    }

    public getFullName(): string {
      return `${ this.name } ${ this.realName }`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string
      , realName: string
      , public isMutant: boolean
    ) {
      super( name, realName )
      // console.log( 'Constructor Xmen llamado!' );
    }

    getFullNameDesdeXmen() {
      // console.log( super.getFullName() );
    }

    get fullName() {
      return `${ this.name } - ${ this.realName }`;
    }

    // //! Solo debe recibir un argumento
    set fullName( name: string ) {
      this.name = name;
    }
  }

  const wolverine = new Xmen( 'Woolverine', 'Logan', true );


  // //! Los getter se llaman sin función, como una propiedad
  // console.log( wolverine.fullName );
  // wolverine.getFullNameDesdeXmen();

  // wolverine.fullName = 'Yoel';
  // console.log( wolverine.fullName );




})()