import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';

import { days } from '../../../../data/shedule/getDays';
import { getDayShedule } from '../../../../data/shedule/getDayShedule';
import { tableHead } from '../../../../data/shedule/getTableHead';

import cl from './Shedule.module.scss';

interface SheduleProps {
    className?: string;
}

export const Shedule = ({ className }: SheduleProps) => {
    const { t } = useTranslation();

    const [currentDay, setCurrentDay] = useState('понедельник');
    const [active, setActive] = useState(1);

    const openTab = (e: React.SyntheticEvent<EventTarget>, day: string) => {
        if (!(e.target instanceof HTMLButtonElement)) {
            return;
        }
        setActive(+e.target.dataset.index);
        setCurrentDay(day);
    };

    const tableBody = getDayShedule(currentDay);
    
    return (
        <div className={classNames(cl.Shedule, {}, [className])}>
            <div className='container'>
                <div className={cl.wrap}>
                    <h2 className={cl.title}>Расписание занятий</h2>
                    <h3 className={cl.subtitle}>
                        Чтобы смотреть дни, нажимайте на вкладки
                    </h3>
                    <div className={cl.days}>
                        {days.map(({ day, id }) => {
                            return (
                                <Button
                                    size={ButtonSize.L}
                                    theme={ButtonTheme.BACKGROUND_INVERTED}
                                    key={id}
                                    onClick={(e) => openTab(e, day)}
                                    data-index={id}
                                    className={`${
                                        id === active ? `${cl.active}` : ''
                                    }`}
                                >
                                    {t(day)}
                                </Button>
                            );
                        })}
                    </div>
                    <div className={cl.table_head}>
                        {tableHead.map((item, index) => {
                            return (
                                <div className={cl.head_item} key={index}>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                    <div className={cl.table_body}>
                        {tableBody.map((item, index) => {
                            return (
                                <div className={cl.head_item} key={index}>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
