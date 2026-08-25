/*
    useContext
        Access context values without prop drilling.
*/

import { useContext } from "react";



        const user = useContext(UserContext);



//      Use it when:    You need global data (theme, auth, etc.) across the component tree.