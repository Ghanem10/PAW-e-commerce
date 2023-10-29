
/** Routes components */
import Introduction from "../pages/landing";
import Products from "../pages/products";
import Subscription from "../pages/subscription";
import Profile from "../pages/profile";

type UIRoutingComponents = {
    path: string;
    component: JSX.Element;
}[];

/**
 * TODO after adding users:
 * 
    const visitorsRoute: UIRoutingComponents = [];
    const publicRoutes: UIRoutingComponents = [];
*/

// AuthRoutes
const authProtectedRoutes: UIRoutingComponents = [

    { path: "/Products", component: <Products /> },
    { path: "/Subscription", component: <Subscription /> },
    
    { path: "/", component: <Introduction /> },
    { path: "*", component: <Introduction /> },
    
    // { path: "/Analytics", component: <Introduction /> },
    { path: "/Profile", component: <Profile /> },
];

export { authProtectedRoutes };