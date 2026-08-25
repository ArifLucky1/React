/*
    useRef
        Keep a mutable value that doesn't trigger re-renders. 

*/

import { useRef } from "react";


        const inputRef = useRef(null);
         inputRef.current.focus();



//      Use it when:   You need to access DOM elements or store mutable values. 