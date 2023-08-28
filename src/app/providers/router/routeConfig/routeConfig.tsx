import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PricePage } from 'pages/PricePage';

export enum AppRoutes {
    MAIN = 'main',
    // ABOUT = 'about',
    PRICES = 'prices',
    // EVENTS = 'events',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PRICES]: '/prices',
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
        path: RoutePath.prices,
        element: <PricePage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
