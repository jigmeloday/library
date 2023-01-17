import { Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';

export function UserRoute() {
    const isAuthenticated = true;
    const AUTHENTICATED: RouteModel[] =[
        {
            id: '1',
            component: <>Profile</>,
            route: '/'
        }
    ];

    return(
        <Suspense fallback={ 'loading...' }>
            <Routes>
                {
                    (isAuthenticated ? AUTHENTICATED: []).map(({ id, route, component }) =>
                        <Route key={`${route}+${id}`} path={route} element={component} />
                    )
                }
                <Route path={'*'} element={<>404</>} />
            </Routes>
        </Suspense>
    )
}
export default UserRoute;