
//   What are props ??
//      Props (short for properties) are read-only inputs passed from parennt component to child component.



        function Child(props){
            return <h1>Hello, {props.name}</h1>;
        }

        function App(){
            return <Child name="Arif" />
        }

//      *** props are immutable (Read-only) ***