import { Route, Routes } from 'react-router-dom';
import CardRegister from '../components/register/card/CardRegister';
import Login from '../views/Login';


const RegisterRoutes = () => {


    return (<>

            <Routes>
                 <Route path='/' element={<Login></Login>} /> 
                 <Route path='/register' element={<CardRegister></CardRegister>} /> 
            </Routes>
 

    </>)
}

export default RegisterRoutes;