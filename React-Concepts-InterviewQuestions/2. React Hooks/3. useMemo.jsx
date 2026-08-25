/*
    useMemo
        Memoize expensive calculations and avoid unnecessary re-computes.

*/

import { useMemo } from "react";



        const value = useMemo(() => {
            return expensiveCalc(data)
        }, [data]);



//      Use it when:    You have expensive calculations that depends on certain values.