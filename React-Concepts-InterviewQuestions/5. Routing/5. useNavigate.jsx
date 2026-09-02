
//      What is useNavigate ?? 
//          useNavigate() is a hook that lets you navigate programmatically.



        import { useNavigate } from 'react-router-dom';

        const nagivate = useNavigate();
        const handleClick = () => {
            navigate('/dashboard');
        }



//      ***  Used for redirecting users on actions.  ***