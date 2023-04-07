import { classNames } from 'shared/lib/classNames/classNames';

import cl from './SheduleItem.module.scss';

interface SheduleItemProps {
    className?: string;
    data: [];
}

export const SheduleItem = ({className, data}: SheduleItemProps) => {
    // if (data.length == 0 ) {
    //     return <div className={cl.relax}>Домашние тренировки</div>;
    // }
    // console.log(data)
    const arr = Object.values(data);

    return ( 
        <div className={cl.SheduleItem}>
            { arr.map((item, index) => (
                <div className={cl.head_item} key={index}>{item}</div>
                
            ))}
        </div>
       
    );
};