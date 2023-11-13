import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
