
//      What are Protected Routes ??
//          Protected routes are accessible only  to authenticated users.


        import { Navigate } from 'react-router-dom';

        const Protected = ({children}) => {
            const isAuth = localStorage.getItem('token');
            return isAuth ? children : <Navigate to="/login" />
        }



//      ***   Redirect unauthorized users to login page.    ***