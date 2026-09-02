
//      What is Context API ??
//          Context API provides a way to pass data through the component tree without passing props manually at every level.



        const MyContext = React.createContext();

        function App(){
            return(
                <MyContext.Provider value="React Rocks">
                    <ComponentA />
                </MyContext.Provider>
            )
        }


//      ***   Good for theme, auth, user data, language etc.  ***