
//      What are Uncontrolled Components ??
            // In uncontrolled components, form data is handled by the DOM itself using refs.




            function App(){
                const inputRef = useRef();

                const handleSubmit = () => {
                    alert(inputRef.current.value);
                };
                return(
                    <>
                        <input ref={inputRef} />
                        <button onClick={handleSubmit}>
                            Submit
                        </button>
                    </>
                );
            }


//      ***  DOM is the source of truth.   ***