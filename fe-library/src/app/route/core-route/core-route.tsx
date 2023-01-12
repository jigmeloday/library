import { Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';
import Home from '../../pages/home/home';

export function CoreRoute() {
    const isAuthenticated = false;
    const AUTHENTICATED_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <Home/>,
            route: ''
        }
    ];
    const UNAUTHENTICATED_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <Home/>,
            route: ''
        }
    ]
    return(
        <Suspense fallback='loading...'>
            <Routes>
                {
                    (isAuthenticated ? AUTHENTICATED_ROUTE : UNAUTHENTICATED_ROUTE).map(({ id, route, component }) =>
                        <Route key={`${route}+${id}`} path={route} element={component} />
                    )
                }
            </Routes>
        </Suspense>
    )
}
export default CoreRoute;