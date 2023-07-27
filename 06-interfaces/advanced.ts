(() => {
  // //TODO --> Como enviar una función como atributo a un objeto de tipo interfaz.
  
  interface Client {
    name: string;
    age?: number;
    address: Adress
    // //! Las interfaces no lo implementa ( no crea el código para que se desarrolle ) , solo espera el tipo
    getFullAddress? ( id: number ): number
  }

  interface Adress {
    id: number;
    zip: string;
    city: string;
  }

  // let customFunction = ( id: number ) => { return id; }

  const client: Client = {
    name: 'Yoel'
    , age: 31
    , address: {
      id: 125
      , zip: 'Nuevo'
      , city: 'Tacna'
    }
    // , customFunction(age)
  }

  const client2: Client = {
    name: 'Jonatan'
    , age: 36
    , address: {
      id: 126
      , zip: 'Nuevo2'
      , city: 'Tacna2'
    }
  }

})()