import React, { useState } from 'react'




const Counter = () => {

  const [count, setCount] = useState<number>(10) // type infiere en el tipo de dato que maneja el useState, pero podemos indicarlo con genéricos también <number>

  const increaseBy =(value:number)=>{
     setCount(count + value)

  }

  return (
    <div>
      <h3>numero en el contador : <small>{count}</small></h3>
      <button
      onClick={()=>increaseBy(+1)}
      className='bg-blue-500 p-5 m-5 rounded-xl text-white'
      >
        +1
      </button>
      <button
      onClick={()=>increaseBy(-1)}
      className='bg-blue-500 p-5 m-5 rounded-xl text-white'
      >
        -1
      </button>
    </div>
  )
}

export default Counter