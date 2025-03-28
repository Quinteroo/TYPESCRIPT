//todo -> copiar carpeta > terminal > cp -r 01_boilerplate/ 03_types_interfaces


//! INTRO TYPESCRIPT
//? https://www.typescriptlang.org/

1. // es un superset de JS, es decir, está construido sobre Js
2. // lo que hace es incluir tipado de datos en nuestro código, volviéndose más seguro y predecible.
3. // en la web podemos encontrar: documentación, Playgound y Para instalarlo en nuestro ordenador



//! INSTALACIÓN
4. // NO queremos instalarlo a nivel globlal como indica la web oficial, si no que queremos hacerlo
// proyecto por proyecto.
5. //? https://www.npmjs.com/package/ts-node
6. // ts-node lo que hace es traducir nuestro código TS en JS para que Node.js lo pueda entender



//! CONFIG
7. // ts-node es un paquete NPM completamente independiente, por lo que es crucial entender como funciona, 
// como se manejan, como se crea un package.json y cuales son las keys que le pertenecen.

8. //* creamos una carpeta y dentro cada carpeta con el proyecto / concepto que queramos trabajar.
//* 01_boilerplate
9. // para iniciar la configuación
// accedemos desde la terminal
// Si ponemos el comando npm init nos crea todo un proyecto de node, pero SI ponemos //* "npm init -y" lo que hace es crearnos un package.json vacío.
// De esta forma le estamos diciendo a Node que queremos crear nosotros desde cero el documento.

// En el package.json vemos varias partes:
// main apunta al archivo principal por donde pasa todo mi código en este caso "index.js" si envolvemos todo 
// el código dentro de la carptea "src" (source) habrá que modificarlo a "src/index.js" para que lo encuentre.
// scripts: son los comandos que al ejecutarlo a través de la terminal como "npm run start" ejecutan el 
// código que se encuentra en main.
// En este caso pondríamos "start: node ." (con el " ." estamos indicando a Node que es el main que habíamos 
// definido antes.


10. // si cambiamos el archivo de index.js a index.ts y tipamos el código que hayamos escrito en index, 
// por ejemplo

//* let filename: string = "periquito"

// console.log(`Hola mi nombre es ${filename{`)

// vamos a ver que Node no lo entiende y da SyntaxError
// En este caso ya tenemos que instalar la dependencia ts-node
// https://www.npmjs.com/package/ts-node

// En la documentación podemos ver que hay varias formas de instalarlo, pero nosotros 
// vamos a hacerlo en modo "Desarrollo"

// # Locally in your project.
// npm install -D typescript
// npm install -D ts-node

// Es decir, que a la hora de pasar a producción ya corre en JavaScript en el servidor.

// Además podemos instalar dos librerías más:
// tslib @types/node

// SET UP: npm install -D typescript ts-node tslib @types/node

// Se crea la carpeta //* node_modules
// en ella están todas las dependencias que vamos a usar, pero pesa mucho 
// Creamos el documento .gitignore para que no se suba a GitHub escribiendo solo dentro "node_modules"

// Modificamos nuestro package.json
// el script start pasa a start:"ts-node ."
// De esta manera, cuando lanzamos el proyecto, ya si node entiende el código en TypeScript.

// Con esto ya tenemos configurado nuestro entorno de desarrollo de Node con TS.