
type Position = "LD" | "MD" | "DC"

type Players ={
  name:string,
  goals: number,
  position: Position  //* si pusieramos String, estaríamos dando la posibilidad al usuario que escriba lo que quiera, por ejemplo position: "hola"
}

type Trainer ={
  name: string,
  age?: number,  //* poneindo ? damos la posibilidad a que sea undefined y no es necesario pasarlo 
  teams: number,
  leagues: number
}

type Team ={
  name: string,
  players: Players[],
  matches: number,
  score: number,
  trainer: Trainer
}


const team: Team = {  //* hay que especificar explícitamente :Team para que TS detecte los problemas
  name: "Spain",
  players: [
    {
      name: "Juanito",
      goals: 3,
      position: "LD"
    },
    {
      name: "Juanito",
      goals: 0,
      position: "MD"
    }
  ],
  trainer:{
    name: "antonio",
    teams: 10,
    leagues: 6

  },
  matches: 2,
  score: 6
}



//! TYPAR FUNCIONES
// forma 1
const sum = (a:number, b:number):number =>{
  return a*b
}

// forma 2
type restFn = (a:number, b:number) => number; // Fn es el acrónimo de Function //* cuando pònemos type hablamos en typescript
const rest:restFn =(a,b)=> a*b