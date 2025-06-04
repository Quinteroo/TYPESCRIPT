


//! Mexican Wave
//? https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/typescript

/*
"hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
" s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]
*/


export function wave(str: string): Array<string>{
  
  let arr = str.split("")
  let result:string[] = []

  for(let i = 0; i < arr.length;i++){
    if(arr[i] !== " "){
        arr = arr.map((e)=> e.toLowerCase())
        arr[i] = arr[i].toUpperCase()
        result.push(arr.join(""))
    }
  }
  return result
}
