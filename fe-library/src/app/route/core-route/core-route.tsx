import { lazy, Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';
import { RouteModel } from '../../shared/models/shared.model';
import Home from '../../pages/home/home';

const AuthRoute = lazy(() => import('../auth-route/auth-route'));
const BookRoute = lazy(() => import('../book-route/book-route'));
const CategoryRoute = lazy(() => import('../category-route/category-route'));
const Author = lazy(() => import('../author-route/author-route'));
const UserRoute = lazy(() => import('../user-route/user-route'));

export function CoreRoute() {
    const CORE_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <Home/>,
            route: '/'
        },
        {
            id: '2',
            component: <BookRoute/>,
            route: '/books/*'
        },
        {
            id: '3',
            component: <CategoryRoute/>,
            route: '/categories/*'
        },
        {
            id: '4',
            component: <Author/>,
            route: '/authors/*'
        },
        {
            id: '5',
            component: <AuthRoute/>,
            route: '/account-creation/*'
        },
        {
            id: '6',
            component: <UserRoute/>,
            route: '/profile/*'
        },
        {
            id: '7',
            component: <>User</>,
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
export default CoreRoute;