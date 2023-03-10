import { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';

const Category = lazy(() => import('../../pages/category/category'));
const CategoryDetails = lazy(() => import('../../pages/category/category-details'));
const PageNotFound = lazy(() => import('../../components/page-not-found/page-not-found'));

export function CategoryRoute() {
    const CORE_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <Category/>,
            route: '/'
        },{
            id: '2',
            component: <CategoryDetails/>,
            route: '/:id'
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
                <Route path={'*'} element={<PageNotFound/>} />
            </Routes>
        </Suspense>
    )
}
export default CategoryRoute;