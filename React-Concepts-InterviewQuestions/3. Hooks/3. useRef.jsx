
    // What is useRef ??
        // useRef is use to persist a value between renders without causing re-render.

import { useRef } from "react";


        function FocusInput(){
            const inputRef = useRef(null)
            return <input ref= {inputRef} type="text" />
        }



    // *** Commonly used for DOM access.  ***