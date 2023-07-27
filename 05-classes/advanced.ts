(() => {

  // //! Si no se define privado o público, el default es "public"

  class Avenger {

    static avgAge: number = 35;
    static getAvAge() {
      //Nombre del objeto
      return this.name;
    }

    constructor( 
      private names: string
      , private team: string
      , public realName?: string ) {
    }

    public bio() {
      return `${ this.names } (${ this.team })`
    }
  }

  const antMan: Avenger = new Avenger( 'Antman', 'Captain' );
  // console.log( antMan );

  // console.log( Avenger.avgAge );
  // console.log( antMan.bio() );
  // console.log( Avenger.getAvAge() );
})()