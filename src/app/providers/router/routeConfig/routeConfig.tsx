import { RouteProps } from 'react-router-dom';
import { ExpressCoursePage } from 'pages/ExpressCoursePage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

import { EXPRESS_COURSE } from '../../../../../data/links/constants';


export const RoutePath: Record<string, string> = {
    'main': '/',
    [EXPRESS_COURSE]: `/${EXPRESS_COURSE}`,
    // [SUMMER_GOODBYE]: `/${SUMMER_GOODBYE}`,
    'not_found': '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath[EXPRESS_COURSE],
        element: <ExpressCoursePage />,
    },
    // {
    //     path: RoutePath[SUMMER_GOODBYE],
    //     element: <SummerGoodbyePage />,
    // },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
