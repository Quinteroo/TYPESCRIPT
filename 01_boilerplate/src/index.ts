// SET UP: npm install -D typescript ts-node tslib @types/node

let saludo: string = "Hola Mundo"

console.log(`${saludo} desde Sevilla!`)


// al hacer el npm run start si da fallo
// El problema ocurre porque ts-node está ejecutando TypeScript en un entorno ESM (ECMAScript Modules), 
// y por defecto, Node.js no reconoce la extensión .ts en ese modo. 

// hay //* dos formas de solucionarlo


//! CREAR TSCONFIG.JSON (en carpeta raíz)
//Si tienes un archivo tsconfig.json, asegúrate de que "module" esté configurado como "CommonJS":
// {
//   "compilerOptions": {
//     "module": "CommonJS",
//     "target": "ESNext",
//     "outDir": "dist",
//     "rootDir": "src",
//     "strict": true
//   }
// }


//! Ejecuta con el --loader de ts-node
// si necesitamos mantener ESM

// "scripts": {
//   "start": "node --loader ts-node/esm src/index.ts"



//! TS-NODE
// ts-node permite ejecutar TypeScript directamente sin compilarlo antes.
// Pero como Node.js no entiende archivos .ts de forma nativa, ts-node necesita saber si el código es CommonJS o ESM.

// Si usas ESM (import/export), debes indicarle a ts-node que lo cargue correctamente:


// node --loader ts-node/esm src/index.ts

// Si no haces esto, Node.js no sabrá cómo interpretar los archivos .ts.


//! RESUMEN
// ✅ TypeScript sí soporta ESM, pero Node.js no lo maneja bien por defecto.
// ✅ Para que Node.js acepte import/export, necesitas "type": "module" en package.json y un tsconfig.json con "module": "ESNext".
// ✅ ts-node necesita configuraciones extra (--loader) si quieres usar ESM directamente sin compilar.

// Si quieres evitar estos problemas, usa CommonJS (require()) y listo. 