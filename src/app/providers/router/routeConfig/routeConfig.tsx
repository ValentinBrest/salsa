import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ExpressCoursePage } from 'pages/ExpressCoursePage';
import { EXPRESS_COURSE } from '../../../../../data/links/constants';


export const RoutePath: Record<string, string> = {
    'main': '/',
    [EXPRESS_COURSE]: `/${EXPRESS_COURSE}`,
    'not_found': '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    // {
    //     path: RoutePath[EXPRESS_COURSE],
    //     element: <ExpressCoursePage />,
    // },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
