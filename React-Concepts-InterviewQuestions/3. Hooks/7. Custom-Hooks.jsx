
//    What are Custom Hooks ??
//      Custom Hooks are JavaScript functions whose names start with 'use' and can call other Hooks.


    import { useState, useEffect } from 'react';

    function useFetch(url){
        const [data, setData] = useState(null);
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(setData);
        }, [url]);
        return data;
    }



//      ***  Helps in reusing logic across components.   ***



//      What are the Rules of Hooks ??
//          Rules ensure Hooks work correctly.

//      Rules:
//         - Only call Hooks at the top level.
//         - Only call Hooks from React function (components or custom Hooks).



//      ***  Helps React rely on the Hook call order.   ***