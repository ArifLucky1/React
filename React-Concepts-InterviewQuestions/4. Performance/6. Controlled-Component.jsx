
//  What are Controlled Components ??
        // In Controlled components, form data is handled by React state

    import useState from 'react'''

        function App(){
            const [name, setName] = useState('');
            return <input value={name} onChange={e=> setName(e.target.value)} />
        }



//      ***  React state is the single source of truth.   ***