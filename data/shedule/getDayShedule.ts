import {shedule} from './shedule';

export const getDayShedule = (current: string): [] => {
    const sheduleDay = shedule.filter(item => item.day === current);
    if (sheduleDay.length == 0) {
        return [];
    }
    return Object.values(sheduleDay[0]).slice(1)[0] as [];
};
