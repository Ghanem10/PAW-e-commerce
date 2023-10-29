
/** React Router */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { authProtectedRoutes } from '../project/auth/routes';
import './App.scss';

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