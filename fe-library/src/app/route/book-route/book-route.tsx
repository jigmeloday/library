import { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';

const Book = lazy(() => import('../../pages/book/book-listing'))
const BookDetails = lazy(() => import('../../pages/book/book-detail'))
const PageNotFound = lazy(() => import('../../components/page-not-found/page-not-found'));

export function BookRoute() {
    const CORE_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <Book/>,
            route: '/'
        },
        {
            id: '2',
            component: <BookDetails/>,
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
                <Route path={'*'} element={<PageNotFound/>} />
            </Routes>
        </Suspense>
    )
}
export default BookRoute;