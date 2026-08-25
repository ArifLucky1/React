/*
    useId
        Generate unique IDs that are stable across server & client.
*/

import { useId } from "react";



        const id = useId();
         <label htmlFor={id}>Name</label>;
         <input id={id} />



//  Use it when:   You need unique IDs for accessibility(SSR-friendly).                 SSR-Server Side Rendering.