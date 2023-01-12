import { Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';

export function CategoryRoute() {
    const CORE_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <>category</>,
            route: '/'
        },{
            id: '2',
            component: <>category Details</>,
            route: '/category/:id'
        },
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
export default CategoryRoute;