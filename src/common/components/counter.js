import React,{useState,useEffect,useRef} from 'react'
import {Text} from 'react-native'

const Counter = ({start,duration,end}) => {

    const [counter, setCounter] = useState(start);

    useEffect(() => {
     const intDuration = duration / end
     let timeout;
    

      if(counter === end || counter > end){
         clearTimeout(timeout)
         setCounter(end);
      }else{
        timeout = setTimeout(() => {
            setCounter(counter + 500);
            console.log("counter " + counter)
          }, intDuration);
      }
  
      return () => {
        clearTimeout(timeout);
      };
    }, [counter]);
  
    return <Text>{counter}</Text>;
}
 
export default Counter;