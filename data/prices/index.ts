import { PRICES } from '../links/constants';

export const prices = {
    id: PRICES,
    title: 'Цены',
    notes: [
        '*Абонемент для студентов дневной формы обучения.',
        '** Скидка на парные абонементы действует с 19.01.2026 года.',
        '***Например, на женский стиль и парную сальсу.'
    ],
    
    header: [
        {category: 'Студенческий*'}, 
        {category: 'Молодёжный', old: 'с 18 до 28 лет'}, 
        {category: 'Стандарт', old: 'c 28 лет'},
    ],
    body: [
        {
            key: 'first',
            name: 'Пробное занятие (самое первое)',
            prices:  [ {oldPrice: null, currentPrice: '10р'}, {oldPrice: null, currentPrice: '10р'}, {oldPrice: null, currentPrice: '10р'}],
        },
        {
            key: 'single',
            name: 'Разовое занятие (1 час)', 
            prices: [{oldPrice: null, currentPrice: '15р'}, {oldPrice: null, currentPrice: '17р'}, {oldPrice: null, currentPrice: '20р'}],
        },
        {
            key: 'seasonTicket',
            name: 'Абонемент на 8 занятий',
            prices:  [ {oldPrice: null, currentPrice: '55р'}, {oldPrice: null, currentPrice: '85р'}, {oldPrice: null, currentPrice: '105р'}],
        },
        {
            key: 'couple',
            name: 'Парный абонемент на парную сальсу на 8 занятий (м+ж)**', 
            prices: [{oldPrice: '110р', currentPrice: '85р'}, {oldPrice: '170р', currentPrice: '125р'}, {oldPrice: '210р', currentPrice: '150р'}],
        },
        {
            key: 'seasonTicketOnTwo',
            name: 'Абонемент на два направления*** на 16 занятий ',
            prices:  [ {oldPrice: null, currentPrice: '75р'}, {oldPrice: null, currentPrice: '115р'}, {oldPrice: null, currentPrice: '140р'}],
        },
    ],
};