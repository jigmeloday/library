import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { RouteModel } from '../../shared/models/shared.model';
import { Grid } from '@mui/material';
import './core-route.style.css';

const AuthRoute = lazy( () => import('../auth-route/auth-route') );
const BookRoute = lazy( () => import('../book-route/book-route') );
const CategoryRoute = lazy( () => import('../category-route/category-route') );
const Author = lazy( () => import('../author-route/author-route') );
const UserRoute = lazy( () => import('../user-route/user-route') );
const Header = lazy( () => import('../../components/header/header') );
const Landing = lazy( () => import('../../pages/home/home') );
const Footer = lazy(() => import('../../components/footer/footer.component'));

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
            route: '/authentication/*'
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

    return (
        <Grid container className='app-container'>
            <Grid item container direction='column'>
                <Grid item container>
                    {
                        url.includes( 'authentication' ) ? null : <Header/>
                    }
                </Grid>
                <Grid item container>
                    <Suspense fallback={'loging'}>
                        <Routes>
                            {
                                CORE_ROUTE.map( ( { id, route, component } ) =>
                                    <Route key={ `${ route }+${ id }` } path={ route } element={ component }/>
                                )
                            }
                            <Route path={ '*' } element={ <>404</> }/>
                        </Routes>
                    </Suspense>
                </Grid>
            </Grid>
            <Grid item alignSelf='end' xs={ 12 }>
                {
                    url === '/' && <Footer />
                }
            </Grid>
        </Grid>
    )
}

export default CoreRoute;