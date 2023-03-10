import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RouteModel } from '../../shared/models/shared.model';

const Authors = lazy( () => import('../../pages/author/author-listing') );
const AuthorDetails = lazy( () => import('../../pages/author/author-details') );
const PageNotFound = lazy( () => import('../../components/page-not-found/page-not-found') );

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

    return (
        <Suspense fallback='loading...'>
            <Routes>
                {
                    CORE_ROUTE.map( ( { id, route, component } ) =>
                        <Route key={ `${ route }+${ id }` } path={ route } element={ component }/>
                    )
                }
                <Route path={ '*' } element={ <PageNotFound/> }/>
            </Routes>
        </Suspense>
    )
}

export default AuthorRoute;