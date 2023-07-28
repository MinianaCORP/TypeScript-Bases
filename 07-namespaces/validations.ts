// //! Es como un módulo, solo se ve lo "export", el "namespace" agrupa clases, metodos, etc.
// //! Se usa mas en librerías

namespace Validations {
  export const validateText = ( test: string ): boolean => {
    return ( test.length > 3 ) ? true: false;
  }

  export const validateDate = ( myDate: Date ): boolean => {
    return ( isNaN(myDate.valueOf()) ) ? false: true;
  }
}


console.log( Validations.validateText('Yoel') );