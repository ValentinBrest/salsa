import { RoutePath } from '../../src/app/providers/router/routeConfig/routeConfig';



export const links = [
    {
        id: 7,
        name: 'Сальса',
        to: RoutePath.main,
        scroll: 'salsa',
    },
    {
        id: 1,
        name: 'О школе',
        to: RoutePath.main,
        scroll: 'about',
    },
    {
        id: 3,
        name: 'Абонементы',
        to: RoutePath.main,
        scroll: 'abonement',
    },
    {
        id: 4,
        name: 'Фотогалерея',
        to: RoutePath.main,
        scroll: 'photos',
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