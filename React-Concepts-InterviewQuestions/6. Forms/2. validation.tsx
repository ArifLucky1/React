
//      What is Validation in React Forms ??
//          Validation ensure that user input is correct before submitting the form.



        const [error, setError] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();
            if (name.trim() === ''){
                setError('Name is required');
                return;
            }
            setError('');
            // submit form
        }


//          ***  Validate on change or on submit.  ***