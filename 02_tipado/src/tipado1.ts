//! TIPADO 1

//? INTERFERIR
// typescript entiende que si no le indicamos el tipo de dato, es por defecto el que contiene

let username = "miguelito";




//?TIPADO
// podemos indicarle uno o varios tipos
let surname : string | number = "quintero";

// pudiendolo posteriormente modificar
surname = 3;




//?TIPOS DE DATOS (primitivos)
// Ssiempre en minúsculas

let myString: string = "hello";
let myNumber: number = 3;
let myBoolean: boolean = true;

// en Js para que una variable sea undefined basta con dejarlo vacío
//let undefined;
// pero en typescript resulta que es "any" es decir, puede ser cualquiera


// para que sea undefined o null es necesario indicarlo
let myUndefinerOrNull : undefined | null;

myUndefinerOrNull = undefined;
myUndefinerOrNull = null;


// Si no tipamos las funciones, TS infiere como con las variables
// para que no sea any, tenemos que indicar el tipo de dato
// también podemos indicar el tipo de dato que queremos recibir (...):string

const splitName = (nameRaw:string):string => {
    return nameRaw.split("_").join(" ")
}

let MySplitName = splitName("Miguel_Angel_Quintero")
console.log(MySplitName)