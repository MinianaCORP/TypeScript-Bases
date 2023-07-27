// //! Lo estático se hace referencia sin inicializar el objeto
(() => {

  class Avenger {
    private name: string;
    private team: string;
    public realName?: string;

    static avgAge: number = 35;

    constructor( name: string, team: string, realName?: string ) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antMan: Avenger = new Avenger( 'Antman', 'Captain' );
  // console.log( antMan );

  // console.log( Avenger.avgAge );
})()