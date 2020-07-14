import {useState,useEffect} from 'react'

export const useCounter = (initialState = 10) => {
    
     /*
    const [primero,setPrimero] = useState(0);
    
    useEffect(() => {
        setPrimero(initialState);
        
    }, []);
    */

    const [counter, setCounter] = useState(initialState);

    const increment = () =>{
        setCounter(counter+1);
    }
    const decrement = () =>{
        setCounter(counter-1);
    }
    const reset = () =>{
        //setState(primero);
        setCounter(initialState);
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
    
}
