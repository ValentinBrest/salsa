import {ABOUT, CONTACT,INFO, LESSONS, LOOK_SALSA, PHOTOS, PRICES, QUESTION, SALSA, SCHOOL} from './constants';

export const links = [
    {
        id: 7,
        name: 'Сальса',
        items: [
            {
                id: 1,
                name: 'О сальсе',
                to: '/',
                scroll: ABOUT,
            },
            {
                id: 2,
                name: 'Почему сальса?',
                to: '/',
                scroll: SALSA,
            },
            {
                id: 3,
                name: 'Как выглядит сальса?',
                to: '/',
                scroll: LOOK_SALSA,
            },
        ],
    },
    {
        id: 1,
        name: 'О школе',
        items: [
            {
                id: 0,
                name: 'Школа "СальсаБрест"',
                to: '/',
                scroll: SCHOOL,
            },
            {
                id: 1,
                name: 'Наши занятия',
                to: '/',
                scroll: LESSONS,
            },
            {
                id: 2,
                name: 'Юридическая информация',
                to: '/',
                scroll: INFO,
            },
        ],
    },
    {
        id: 3,
        name: 'Цены',
        to: '/',
        scroll: PRICES,
    },
    {
        id: 4,
        name: 'Фотогалерея',
        to: '/',
        scroll: PHOTOS,
    },
    {
        id: 5,
        name: 'Вопросы',
        to: '/',
        scroll: QUESTION,
    },
    {
        id: 6,
        name: 'Контакты',
        to: '/',
        scroll: CONTACT,
    },
];