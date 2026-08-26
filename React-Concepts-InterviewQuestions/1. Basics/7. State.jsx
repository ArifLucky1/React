
//    What is State ??
//        State is a built-in object that stores data which can change over time.
//          When state updates, component re-renders.

import { useState } from "react";



        function Counter(){
            const [count, setCount] = useState(0)
            return (
                <button onClick = {() => setCount(count + 1)}>
                Count : {count}
                </button>
            )
                
        }


//          ***     State updates lead to re-rendering of the component.    ***