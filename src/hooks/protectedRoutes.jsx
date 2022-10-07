import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Profile from '../views/Profile';

const ProtectedRoutes = () => {


    return (<>

   
            <Routes>
                 <Route path='/' element={<Home></Home>} /> 
                 <Route path='/profile/:id' element={<Profile></Profile>} /> 
            </Routes>
 

    </>)
}

export default ProtectedRoutes;