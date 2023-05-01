import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    // ABOUT = 'about',
    // EVENTS = 'events',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    // [AppRoutes.ABOUT]: '/about',
    // [AppRoutes.EVENTS]: '/events',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    // {
    //     path: RoutePath.about,
    //     element: <AboutPage />,
    // },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
