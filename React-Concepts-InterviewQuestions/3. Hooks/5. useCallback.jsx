
//      What is useCallBack ??
//         useCallBack returns a memoized callback function that only changes when dependencies change.



        const memoizedFn = useCallback(
          () => {
            doSomething(a, b);
          },
          [a, b]
        );



//      ***    Useful for preventing unnecessary re-renders in child components.    ***