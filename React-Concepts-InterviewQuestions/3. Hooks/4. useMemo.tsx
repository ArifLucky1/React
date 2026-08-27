
//  What is useMemo ??
        // useMemo memoizes expensive computations and return the cached value.

            
            import {useMemo} from 'react';
            const memoValue = useMemo(() => computeExpensiveValue(a, b), [a, b])




        // ***  Re-computes only when dependencies change.   ***