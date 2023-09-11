import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PoliticsPage } from 'pages/PoliticsPage';
import { PricePage } from 'pages/PricePage';

export enum AppRoutes {
    MAIN = 'main',
    POLITICS = 'politics',
    // ABOUT = 'about',
    // PRICES = 'prices',
    // EVENTS = 'events',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.POLITICS]: '/politics',
    // [AppRoutes.PRICES]: '/prices',
    // [AppRoutes.EVENTS]: '/events',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.politics,
        element: <PoliticsPage />,
    },
    // {
    //     path: RoutePath.about,
    //     element: <AboutPage />,
    // },
    // {
    //     path: RoutePath.prices,
    //     element: <PricePage />,
    // },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
