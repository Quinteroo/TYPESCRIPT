

//! GENÉRICOS
// no es lo más recomendable, siempre es mejor hacer funciones específicas para casos específicos
// puede que lo encontremos en proyectos
// los tipos genéricos son una forma de propagar un tipo al resto de elementos de la función 
// esto se da cuando necesitamos reutilizar una función pero con argumentos que tienen tipos diferentes.


type TrainerWithGoals = Trainer & {
  goals:number
}

type PlayerWithGoals = Player & {
  goals: number,
}

const goalsById = {
  1: 2,
  2:0
}

type Player={
  id: number,
  name:string,
  team:string,
  position: string,
}

type Trainer={
  id:number,
  name:string,
  team:string,
  leagues: number,
}

const trainers:Trainer[]= [
  {
    id: 1,
    name: "manolito",
    team: "spain",
    leagues: 3
  },
  {
    id: 1,
    name: "juanito",
    team: "spain",
    leagues: 4
  },
]

const players:Player[]= [
  {
    id: 1,
    name: "manolito",
    team: "spain",
    position: "MD"
  },
  {
    id: 1,
    name: "juanito",
    team: "spain",
    position: "LD"
  },
]


const addGoals = (Arr: (Player | Trainer)[]): (PlayerWithGoals | TrainerWithGoals)[] =>{

  return Arr.map((element)=>{
    const goals = goalsById[element.id] || 0;

    return {
      ...element,
      goals
    }
  })

}


const PlayersWithGoals = addGoals(players) //* aquí tenemos elproblema porque typescript no sabe que tipo de array es, si PlayerWithGoals o TrainerWithGoals
const TrainersWithGoals = addGoals(trainers) as TrainerWithGoals[] //* podemos castearlo directamente aquí



//! 👇🏻👇🏻 o pordríamos usar un tipo genérico para que lo propagase hasta el resultado

const addGoals1 = <T extends Player | Trainer>(Arr: T[]): (T & {goals: number})[] =>{

  return Arr.map((element)=>{
    const goals = goalsById[element.id] || 0;

    return {
      ...element,
      goals
    }
  })

}


const PlayersWithGoals1 = addGoals1<Player>(players)
const TrainersWithGoals1 = addGoals1<Trainer>(trainers)