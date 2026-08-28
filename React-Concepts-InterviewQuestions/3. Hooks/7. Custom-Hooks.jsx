
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