import Login from '../src/views/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './hooks/protectedRoutes'
import { AuthContext } from "./hooks/useAuth"
import { useContext, useEffect } from 'react';
import { getValue } from './common/storage';
import RegisterRoutes from './hooks/registerRoutes';

const App = () => {

    const { signIn, getUser, signOut } = useContext(AuthContext);

    useEffect(() => {
        const res = getValue("authSession");

        if (res) {
            console.log(res);
            signIn(res.email, res.token)
        } else {
            signOut()
        }
    }, []);

    if (getUser.isLogin === undefined) {
        return <h1>Cargando</h1>
    }
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='*' element={getUser.isLogin ? <ProtectedRoutes></ProtectedRoutes> : <RegisterRoutes></RegisterRoutes>} />

                    <Route  path='/info' element={<h1>informacion</h1>}></Route>

                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;