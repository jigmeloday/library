import { Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';

export function BookRoute() {
    const CORE_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <>Book</>,
            route: '/'
        },
        {
            id: '2',
            component: <>Book details</>,
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
export default BookRoute;