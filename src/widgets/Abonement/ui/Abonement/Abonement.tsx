import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text } from 'shared/ui/Text/Text';
import { Prices } from 'widgets/Prices';

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
        <section style={{background: backgroundColor}} ref={triggerRef}
            id="abonement" className={classNames(cl.Abonement, {}, [className])}>
            <div className="container">
                <div className={classNames(cl.wrap, {[cl.active]: isVisible}, [])}>
                    <Text title="Абонементы" />
                    <Prices/>
                </div>
            </div>
        </section>
    );
};
