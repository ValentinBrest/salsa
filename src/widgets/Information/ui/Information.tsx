import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Accordion } from 'shared/ui';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import tree from '../../../../public/img/newYear/tree.png';

import cl from './Information.module.scss';

interface InformationProps {
    className?: string;
    backgroundColor?: string;
}

export const Information = ({
    className,
    backgroundColor,
}: InformationProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });

    return (
        <div
            style={{ background: backgroundColor }}
            id='info'
            className={classNames(cl.Information, {}, [className])}
            ref={triggerRef}
        >
            <div className='container'>
                <div
                    className={classNames(
                        cl.wrap,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    <Accordion
                        linkId='info'
                        height='1000px'
                        background={backgroundColor}
                    >
                        <div className={cl.decr}>
                            <img
                                loading='lazy'
                                src={tree}
                                className={cl.tree}
                                alt='tree'
                            />
                            <Text
                                className={cl.title}
                                title='Юридическая информация'
                            />

                            <Text
                                className={cl.text}
                                align={TextAlign.LEFT}
                                text={
                                    <>
                                        Немного скучной, но необходимой
                                        информации, касающейся юридических
                                        аспектов.
                                    </>
                                }
                            />
                            <Text
                                className={cl.text}
                                align={TextAlign.LEFT}
                                text={
                                    <>
                                        Оказание услуги «обучение танцу»
                                        выстраиваются по принципу «как есть».
                                        Это означает, что мы преподаем так, как
                                        преподаем (по методикам, которые считаем
                                        наиболее прогрессивными), а вы учитесь,
                                        если вам нравится, или не учитесь, если
                                        не нравится. Студия не несет{' '}
                                        <b>юридической</b> ответственности за
                                        результаты обучения.
                                    </>
                                }
                            />
                            <Text
                                className={cl.text}
                                align={TextAlign.LEFT}
                                text={
                                    <>
                                        Медицинская справка о допуске к занятиям
                                        не требуется. Однако, студия не несет
                                        ответственности за состояние вашего
                                        здоровья, вред, причиненный вашему
                                        здоровью в результате чрезмерных для вас
                                        нагрузок, занятий при противопоказаниях,
                                        полученные в результате неправильного
                                        исполнения упражнений травмы.
                                    </>
                                }
                            />
                            <Text
                                className={cl.text}
                                align={TextAlign.LEFT}
                                text={
                                    <>
                                        Если вы решили прервать обучение, деньги
                                        за приобретенный абонемент не
                                        возвращаются. Для того, чтобы вы могли
                                        спокойно определиться перед покупкой
                                        абонемента, мы проводим пробные занятия,
                                        кроме того, если вы еще не определились,
                                        можно посещать занятия разово.
                                    </>
                                }
                            />
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
