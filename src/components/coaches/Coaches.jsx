import './Coaches.css'
import {useState} from 'react'

function Coaches(){
  const [count,setCount] = useState(0)
  console.log(count)
    return(
        <div>
            <span>You clicked {count} times</span>
           
           <button className='btn' onClick={() => setCount(count + 1)}>
               Push
           </button>
           
           <button onClick={() => setCount(count - 1)}>
              Push
           </button>
        </div>
    )
}

export default Coaches;