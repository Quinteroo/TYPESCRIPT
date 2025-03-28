

//! representa algo que es de tipo objheto

interface Player {
  name: string,
  matches: number,
  goals: number
}

interface Player {
  name: string,
  matches: number,
  penaltis: number    //* cuando hay dos interfaces que se llaman igual, se combinan, esto se llama "mergear" pero puede generar problemas en los tipos
}

const player:Player={
  name: "peirquito",
  matches: 3,
  goals:2,
  penaltis:12

}

// si queremos extender una interfaz en un momento concreto del desarrollo podemos usar la siguiente forma

interface playerExtends extends Player{
  surname: string
}

// otra diferencia es que la interfaz no me permite tipar un valor en específico
type PlayerPosition = "MD" | "DC" | "GM"


//! interfaces vienen muy buen para objetos y clases pero el 95% lo podemos desarrollar con Types

