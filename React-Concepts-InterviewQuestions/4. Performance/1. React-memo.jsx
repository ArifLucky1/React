
//      What is React.memo ??
//          React.memo is a higher order component that memoizes the component and prevents unneccesssary re-renders.


        const MyComponent = React.memo(function MyComponent(props) {
            return <div>{props.name}</div>
        });


//          *** Re-renders only when props change. ***