import { AppRoutes } from '../../src/app/providers/router/routeConfig/routeConfig';

export const links = [
    {
        id: 1,
        name: 'Главная',
        to: AppRoutes.MAIN,
    },
    {
        id: 2,
        name: 'Расписание',
        to: AppRoutes.MAIN,
    },
    {
        id: 3,
        name: 'Цены',
        to: AppRoutes.MAIN,
    },
    {
        id: 4,
        name: 'Мероприятия',
        to: AppRoutes.EVENTS,
    },
    {
        id: 5,
        name: 'Вопросы',
        to: AppRoutes.MAIN,
    },
    {
        id: 6,
        name: 'Контакты',
        to: AppRoutes.MAIN,
    },
];