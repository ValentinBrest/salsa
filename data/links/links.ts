import { AppRoutes, RoutePath } from '../../src/app/providers/router/routeConfig/routeConfig';

export const links = [
    {
        id: 1,
        name: 'О школе',
        to: RoutePath.main,
        scroll: 'about',
    },
    {
        id: 4,
        name: 'Мероприятия',
        to: RoutePath.main,
        scroll: '',
    },
    {
        id: 2,
        name: 'Расписание',
        to:RoutePath.main,
        scroll: 'shedule',
    },
    {
        id: 3,
        name: 'Цены',
        to: RoutePath.main,
        scroll: 'price',
    },
    {
        id: 5,
        name: 'Вопросы',
        to: RoutePath.main,
        scroll: 'question',
    },
    {
        id: 6,
        name: 'Контакты',
        to: RoutePath.main,
        scroll: 'contact',
    },
];