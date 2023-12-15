import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Prices } from 'widgets/Prices';
import violet from '../../../../../public/img/newYear/violet.png';
import cl from './Abonement.module.scss';

interface PricesProps {
    className?: string;
    backgroundColor?: string;
}

export const Abonement = ({ className, backgroundColor }: PricesProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
        threshold: 0.05,
    });

    return (
        <section
            style={{ background: backgroundColor }}
            ref={triggerRef}
            id='abonement'
            className={classNames(cl.Abonement, {}, [className])}
        >
            <div className='container'>
                <div
                    className={classNames(
                        cl.wrap,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    <Text
                        // title="Абонементы"
                        hardTitle={[
                            'Аб',
                            <img src={violet} key='1' className={'toy'} />,
                            'нементы',
                        ]}
                    />
                    <Prices />
                    <Text className={cl.text} align={TextAlign.LEFT}
                        text={
                            '*Протанцовка - дополнительное занятие, где можно самостоятельно отработать парные фигуры, изученные на уроках. На протанцовке присутствует преподаватель, которому можно задавать вопросы.'
                        }
                    />
                </div>
            </div>
        </section>
    );
};
