import { Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';

export function AuthRoute() {
    const CORE_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <>Login</>,
            route: '/login'
        },
        {
            id: '2',
            component: <>Registration</>,
            route: '/signup'
        },
        {
            id: '3',
            component: <>Forgot Password</>,
            route: '/book/:id'
        }
    ];

    return(
        <Suspense fallback='loading...'>
            <Routes>
                {
                    CORE_ROUTE.map(({ id, route, component }) =>
                        <Route key={`${route}+${id}`} path={route} element={component} />
                    )
                }
                <Route path={'*'} element={<>404</>} />
            </Routes>
        </Suspense>
    )
}
export default AuthRoute;