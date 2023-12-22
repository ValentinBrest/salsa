import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Prices } from 'widgets/Prices';
import violet from '../../../../../public/img/newYear/violet.png';
import cl from './Abonement.module.scss';
import { abonement } from '../../../../../data/abonement';

interface PricesProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Abonement = ({
    className,
    backgroundColor,
    isNewYear = false,
}: PricesProps) => {
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
                    {isNewYear ? (
                        <Text
                            hardTitle={[
                                'Аб',
                                <img
                                    loading='lazy'
                                    src={violet}
                                    key='1'
                                    className={'toy small'}
                                    alt='o'
                                />,
                                'нементы',
                            ]}
                        />
                    ) : (
                        <Text title={abonement.title} />
                    )}
                    <Prices isNewYear={isNewYear} />
                    <Text
                        className={cl.text}
                        align={TextAlign.LEFT}
                        text={abonement.note}
                    />
                </div>
            </div>
        </section>
    );
};
