
//  What is useeffect ??
        // useEffect is used to perform side effects in functional components.

import { useEffect } from "react";




        useEffect(()=> {
            // side effect code
            console.log("Effect runs");
            
        }, []);                                 // dependency array



//      *** Runs after the component renders. ***