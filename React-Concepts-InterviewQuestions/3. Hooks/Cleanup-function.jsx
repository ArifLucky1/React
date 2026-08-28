
//      What is Cleanup Function ??
//          Cleanup function is used to clean up resources before the component unmounts or before the effect re-runs.


//      Ex:
            useEffect(() => {
                const id = setInterval(() => {
                    console.log('Hi');
                    
                }, 1000);
                return () => clearInterval(id);             // cleanup
            }, []);





//          ***  Prevents memory leaks.   ***