

//! FUNCTIONS RETURN TYPES
const sum = (a:number, b:number):number => a+b

//se puede dar el caso en el que no queramos devolver un valor, que solo queramos modificar algo como un elemento en el DOM
// o una State 


//? VOID
// para ellos empleamos el tipo void que quiere decir que no devuleve nada
const addListener = (entities: []):void =>{
  // añade listeners con window.addEventListener
}


//?NEVER
// enel caso en que la función siempre sea true
const neverFn = ():never=>{
  while(true){}
}


//! UTILIDADES Y EXTRAS
//? https://www.typescriptlang.org/docs/handbook/utility-types.html

type User={
  id:number,
  name:string,
  email:string,
  role?:string,
  password:string
}


const user:User ={
  id:1,
  name: "miguelito",
  email: "email@email",
  role: "admin",
  password:"password123"

}

//Partial
// nos permite crear un nuevo tipo a raíz de parte de los valores de otro
type PartialUser = Partial<User>;
const partialUser: PartialUser = {
  email: "email2@email",
}

//Required
// nos permite crear un nueco tipo con campos requridos de otro


//ReadOnly
// nos permite pasar información sin capacidad para modificar el objeto


//Pick
//crear un nnuevo tipo extrayento 

//Omit
// crear un nuevo tipo omitiendo un valor