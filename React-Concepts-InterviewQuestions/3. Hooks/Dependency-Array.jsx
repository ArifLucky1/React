
//      What is Dependency Array ??
//          The dependency array tells React when to re-run the effect or memoized value.


//      Ex: (useEffect):

        useEffect(() => {
            // effect code
        }, [a, b]);


//        []      ->      Runs once (on mount)
//        [a]     ->      Runs when 'a' changes
//        [a,b]   ->      Runs when 'a' or 'b' changes.