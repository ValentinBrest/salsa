import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProjectPage } from 'pages/Projects/ui/ProjectPage';

export enum AppRoutes {
    MAIN = 'main',
    PROJECT = 'project',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROJECT]: '/project',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.project,
        element: <ProjectPage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
