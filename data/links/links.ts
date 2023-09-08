import { AppRoutes, RoutePath } from '../../src/app/providers/router/routeConfig/routeConfig';



export const links = [
    {
        id: 1,
        name: 'О школе',
        to: RoutePath.main,
        scroll: 'about',
    },
    // {
    //     id: 2,
    //     name: 'Расписание',
    //     to:RoutePath.main,
    //     scroll: 'shedule',
    // },
    {
        id: 3,
        name: 'Абонементы',
        to: RoutePath.main,
        scroll: 'abonement',
    },
    {
        id: 4,
        name: 'Фотографии',
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