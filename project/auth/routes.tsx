import { Navigate } from "react-router-dom";

/** Routes components */
import Introduction from "../pages/landing";
import Products from "../pages/products";
import Subscription from "../pages/subscription";

type UIRoutingComponents = {
    path: string;
    component: JSX.Element;
}[];

// Visitors
const visitorsRoute: UIRoutingComponents = [];

// Public 
const publicRoutes: UIRoutingComponents = [];

// AuthRoutes
const authProtectedRoutes: UIRoutingComponents = [

    { path: "/Products", component: <Products /> },
    { path: "/Subscription", component: <Subscription /> },
    
    { path: "/", component: <Introduction /> },
    { path: "*", component: <Introduction /> },
    
    // { path: "/Analytics", component: <Introduction /> },
    // { path: "/profile", component: <UserProfile /> },
];

export { authProtectedRoutes };