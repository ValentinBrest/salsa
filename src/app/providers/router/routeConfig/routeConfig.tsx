import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { CoursePage } from 'pages/CoursePage';

export enum AppRoutes {
    MAIN = 'main',
    COURSE = 'course',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.COURSE]: '/course',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.course,
        element: <CoursePage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
