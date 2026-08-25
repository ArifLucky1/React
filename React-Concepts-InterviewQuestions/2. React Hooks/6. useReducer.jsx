/*
    useReducer
        Manage complex state logic with reducer pattern.
*/

import { useReducer } from "react";


        const [state, dispatch] = useReducer(reduce, initialState);



//      Use it when:    You have complex state transitions or next state depends on previous.