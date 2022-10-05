import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Profile from '../views/Profile';

const RegisterRoutes = () => {


    return (<>

   
            <Routes>
                 <Route path='/' element={<Login></Login>} /> 
                 <Route path='/register' element={<h1>Registro</h1>} /> 
            </Routes>
 

    </>)
}

export default RegisterRoutes;