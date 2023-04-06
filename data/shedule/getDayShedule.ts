import {shedule} from './shedule';

export const getDayShedule = (current: string) => {
    const sheduleDay = shedule.filter(item => item.day === current);
    return Object.values(sheduleDay[0]).slice(1);
};
