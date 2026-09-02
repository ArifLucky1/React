
//      What is Form Handling in React ??
//          Form handling in React involves managing form data using state.

import { useState } from "react";


        function Form(){
            const [name, setName] = useState('');
            const handleSubmit = (e) => {
                e.preventDefault();
                console.log(name);
                
            }
            return(
                <form onSubmit = {handleSubmit}>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    <button type="submit"> Submit</button>
                </form>
            )
        }


//      ***  Handle input changes and form submit using state.   ***