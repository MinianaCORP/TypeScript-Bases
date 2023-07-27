(() => {

  type Hero = {
    name:string;
    age?: number;
    powers: string[];
    getName?: () => string
  }

  let myCustomVariable: ( string | number | Hero ) = 'Fernando';
  console.log(myCustomVariable);

  myCustomVariable = 10;
  console.log(myCustomVariable);

  myCustomVariable = {
    name: 'Bruce'
    , age: 43
    , powers: [ 'Smash' ]
  }
  
  // //!Cuando se utiliza el "type", el recurso que se muestra en el "console.log" es "object"
  console.log(myCustomVariable);


})()