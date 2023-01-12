import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { RouteModel } from '../../shared/models/shared.model';
import { Grid } from '@mui/material';

const AuthRoute = lazy(() => import('../auth-route/auth-route'));
const BookRoute = lazy(() => import('../book-route/book-route'));
const CategoryRoute = lazy(() => import('../category-route/category-route'));
const Author = lazy(() => import('../author-route/author-route'));
const UserRoute = lazy(() => import('../user-route/user-route'));
const Header = lazy(() => import('../../components/header/header'));
const Landing = lazy(() => import('../../pages/home/home'));

export function CoreRoute() {
    const url = useLocation().pathname;
    const CORE_ROUTE: RouteModel[] = [
        {
            id: '1',
            component: <Landing/>,
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
            route: '/user/:id'
        }
    ];

    return(
        <Suspense fallback='loading...'>
            <Grid container item direction='column'>
                <Grid item container>
                    {
                        url.includes('account-creation') ? null : <Header/>
                    }
                </Grid>
                <Grid item container>
                    <Routes>
                        {
                            CORE_ROUTE.map(({ id, route, component }) =>
                                <Route key={`${route}+${id}`} path={route} element={component} />
                            )
                        }
                        <Route path={'*'} element={<>404</>} />
                    </Routes>
                </Grid>
            </Grid>
        </Suspense>
    )
}
export default CoreRoute;