
/** React Router */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { authProtectedRoutes } from '../project/auth/routes';
import './App.scss';
import { useEffect } from 'react';
import axios from 'axios';

type IAuthRoutes = {
    path: string;
    component: JSX.Element;
    exact?: undefined;
} | {
    path: string;
    exact: boolean;
    component: JSX.Element;
};

export default function App() {

    // Temp ---
    useEffect(() => {
        const testQ = async () => {
            await axios.get(`${import.meta.env.VITE_URL_BASE}/test`);
        };

        testQ();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    {authProtectedRoutes.map((route: IAuthRoutes, idx) => (
                        <Route 
                            key={idx}
                            path={route.path}
                            element={
                                route.component
                            }
                        />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}