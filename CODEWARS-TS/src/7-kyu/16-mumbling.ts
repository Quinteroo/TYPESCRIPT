


//! Mumbling
//? https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

//This time no story, no theory. The examples below show you how to write function accum:

//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.


export function accum(s: string | null): string | undefined {
    if(s === null) return undefined
    let result:string[] = []
    let arr = s.toUpperCase().split("")
    let element:string = "";

    for(let i = 0; i < arr.length; i++){
        let element = arr[i]
        element += (arr[i].toLowerCase().repeat(i))
        result.push(element)
    }

    return result.join("-")
}
