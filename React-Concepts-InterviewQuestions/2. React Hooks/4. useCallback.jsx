/*
    useCallback
        Memoize functions so they don't change on every render.

*/

import { useCallback } from "react";



        const handleClick = useCallback(() => {
            // do something
        }, [deps])



//    Use it when:     You pass functions to child components that rely on reference equality.