import { Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';
import Home from '../../pages/home/home';

export function CoreRoute() {
    const CORE_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <Home/>,
            route: '/'
        },
        {
            id: '2',
            component: <>Book</>,
            route: '/books'
        },
        {
            id: '3',
            component: <>Book Details</>,
            route: '/book/:id'
        },
        {
            id: '4',
            component: <>category</>,
            route: '/categories'
        },{
            id: '5',
            component: <>category Details</>,
            route: '/category/:id'
        },
        {
            id: '6',
            component: <>Author</>,
            route: '/Authors'
        },{
            id: '7',
            component: <>Author</>,
            route: '/Author/:id'
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
export default CoreRoute;