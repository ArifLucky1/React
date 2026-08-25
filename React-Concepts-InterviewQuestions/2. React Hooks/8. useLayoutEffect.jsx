/* 
    useLayoutEffect
        Like useEffect, but runs before the browser repaints.
*/

import { useLayoutEffect } from "react";



        useLayoutEffect(()=>{
            // run before paint
        }, [deps]);



//  Use it when:    You need to read layout and make synchronous adjustments.