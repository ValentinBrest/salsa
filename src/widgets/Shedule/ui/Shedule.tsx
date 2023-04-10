import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { days, getToday } from '../../../../data/shedule/getDays';
import { getDayShedule } from '../../../../data/shedule/getDayShedule';
import { tableHead } from '../../../../data/shedule/getTableHead';

import { SheduleItem } from './SheduleItem/SheduleItem';

import cl from './Shedule.module.scss';

interface SheduleProps {
    className?: string;
}

export const Shedule = ({ className }: SheduleProps) => {
    const { t } = useTranslation();

    const today = getToday(new Date());

    const [currentDay, setCurrentDay] = useState(today.day);
    const [active, setActive] = useState(today.id);

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
            <div className="container">
                <div className={cl.wrap}>
                    <Text title="Расписание занятий"/>
                    <Text text="*Чтобы смотреть дни, нажимайте на вкладки" theme={TextTheme.ITALIC}/>
                    
                    <div className={cl.days}>
                        {days.map(({ day, id }) => {
                            return (
                                <Button
                                    size={ButtonSize.L}
                                    theme={ButtonTheme.TABS}
                                    key={id}
                                    onClick={(e) => openTab(e, day)}
                                    data-index={id}
                                    className={`${cl.tab} ${
                                        id === active ? `${cl.active}` : ''
                                    }`}
                                >
                                    {t(day)}
                                </Button>
                            );
                        })}
                    </div>
                    {tableBody.length == 0 
                        ? <div className={cl.relax}>Домашние тренировки</div> 
                        : <div className={cl.table}>
                            <div className={cl.table_head}>
                                {tableHead.map((item, index) => {
                                    return (
                                        <div className={cl.head_item} key={index}>
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                    
                            {tableBody.map((item, index) => (
                                <SheduleItem key={index} data={item}/>
                            ))}
                        </div>}
                    
                </div>
            </div>
        </div>
    );
};
