import { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';

const Authors = lazy(() => import('../../pages/author/author-listing'));
const AuthorDetails = lazy(() => import('../../pages/author/author-details'));

export function AuthorRoute() {
    const CORE_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <Authors/>,
            route: '/'
        },
        {
            id: '2',
            component: <AuthorDetails/>,
            route: '/:id'
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
    export default AuthorRoute;