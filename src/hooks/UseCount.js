import { useState } from "react"


export const UseCount = (initialObject = 10) =>{

    const [counter, setCounter] = useState(initialObject)

    const increment = () => {
        setCounter ( counter + 1 );
    }

    const decrement = () => {
        setCounter ( counter - 1 );
    }


    return{
        counter,
        increment,
        decrement,
    }
} 