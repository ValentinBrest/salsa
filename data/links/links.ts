import { AppRoutes, RoutePath } from '../../src/app/providers/router/routeConfig/routeConfig';

export const links = [
    {
        id: 1,
        name: 'Главная',
        to: RoutePath.main,
    },
    {
        id: 2,
        name: 'Расписание',
        to:RoutePath.main,
    },
    {
        id: 3,
        name: 'Цены',
        to: RoutePath.main,
    },
    {
        id: 4,
        name: 'Мероприятия',
        to: RoutePath.events,
    },
    {
        id: 5,
        name: 'Вопросы',
        to: RoutePath.main,
    },
    {
        id: 6,
        name: 'Контакты',
        to: RoutePath.main,
    },
];