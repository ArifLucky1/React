
//      What is Dynamic Routes ??
//          Dynamic routes have parameters in the URL that can change.


        <Route path="/user/:id" element={<User />} />
            // Accessing in component
            
            import { useParams } from 'react-router-dom';
            const {id}= useParams();



//      ***  Used to show data based on dynamic values like id.   ***