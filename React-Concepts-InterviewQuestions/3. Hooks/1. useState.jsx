
//   What is useState ??
//      useState is a Hook that lets you add state variables in function components.

const { useState } = require("react");



    function Counter(){
        const [count, setCount] = useState(0);
        return(
            <button onClick = {()=> setCount(count + 1)}>
                Count: {count}
            </button>
        )
    }


//  ***  Returns a state value and a function to update it.   ***    