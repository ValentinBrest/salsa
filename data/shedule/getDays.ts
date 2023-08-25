export const days = [
    { id: 1, day: 'понедельник' },
    { id: 2, day: 'вторник' },
    { id: 3, day: 'среда' },
    { id: 4, day: 'четверг' },
    { id: 5, day: 'пятница' },
    { id: 6, day: 'суббота' },
];

export const getToday = (date: Date) => {
    const numberDay = date.getDay();
    if (numberDay === 7) return days[0];
    const today = days.filter(item => item.id == numberDay );
    return today[0];
};