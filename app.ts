//hay problemas si es que existen variables con el mismo nombre en JS y TS

// //!Un poco de teoría
//terminal-> tsc nombrearchivo -> para convertir un archivo a js
//terminal-> tsc init -> para generar la configuración de TS ( tsconfig.json )
//terminal-> tsc -> para convertir todos los archivos ts a js
//terminal-> tsc --w -> para que entre en estado observable y que haga la conversión automática.

// //! tsconfig.json
// ( "target": "es2016" ) -> Versión de JS que se utilizará para la conversión de archivos TS a JS
// ( "module": "amd" ) -> Tipo de módulo poara la generación del archivo principal JS
// //* ( "sourceMap": true ) -> Cuando se depura código en la consola del navegador, aparecen números de líneas que deberían hacer referencia al archivo de programación, cuando tira un error en el archivo JS, la línea en algunas ocasiones no es la misma que en el archivo TS, por lo que se necesita de un archivo ".MAP.JS" para poder tener la referencia exacta del número de línea
// ( "outFile": "./ruta" ) -> Ruta para la generación del archivo "JS principal"
// ( "removeComments": true ) -> Eliminar comentarios
// ( "exlclude": [... array de especificaciones] ) -> Exluir carpetas << ruta/ruta2/archivo >> o grupo de archivos << ruta/*.tipo >> para la generación de código TS
// //! ( "include": [... array de especificaciones] ) -> Incluye carpetas << ruta/ruta2/archivo >> o grupo de archivos << ruta/*.tipo >> para la generación de código TS, IMPORTANTE, solo se generará de aquí los archivos


(() => {
  // //! Evitar los any
  const a: number = 10;

  // tsconfig.json -> "noImplicitAny": true -> exige tipado
  function sayHello( msg: string ): string {
    return `Hola ${ msg }`;
  }

  console.log( sayHello( 'Mundo' ) );
  
})()