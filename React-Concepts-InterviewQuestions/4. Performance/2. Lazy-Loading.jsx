
//      What is Lazy Loading ??
//          Lazy loading means loading components only when they are needed, not at initial load.



        const About = React.Lazy(() => import('/About'));

        function App(){
            return (
                <React.Suspense fallback = {<div>Loading...</div>}>
                    <About />
                </React.Suspense>
            )
        }


//          ***  Improves performance by reducing initial bundle size.   ***        