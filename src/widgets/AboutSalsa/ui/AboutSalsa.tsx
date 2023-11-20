import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text } from 'shared/ui/Text/Text';

import conga from '../../../../public/img/instuments/conga.webp';

import cl from './AboutSalsa.module.scss';

interface AboutSalsaProps {
    className?: string;
    backgroundColor?: string;
}

export const AboutSalsa = ({ className, backgroundColor }: AboutSalsaProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });
    return (
        <div
            style={{ background: backgroundColor }}
            id="salsa"
            className={classNames(cl.AboutSalsa, {}, [className])}
            ref={triggerRef}
        >
            <div className="container">
                <div className={classNames(cl.wrap, {[cl.active]: isVisible}, [])}>
                    <div className={cl.decr}>
                        <Text
                            text={<><b>Сальса</b> - это и музыкальный жанр, включающий в себя множество разновидностей ритмических стилей и музыкальных форм, и объединяющее наименование целого множества танцевальных направлений. На нашем сайте под термином «сальса» мы будем подразумевать именно танец (если нет указывающих на музыку пояснений). 
                            </>} 
                        />
                        <Text
                            text="Итак. Сальса – популярный латиноамериканский танец, который танцуют по всему миру. Хотите танцевать сальсу дома, на сальса-вечеринках в Бресте, в Минске или практически в любом городе мира? Хотите удивлять родных, друзей, знакомых и коллег на торжествах, в клубах и на корпоративах? Хотите просто быть здоровыми и жить полноценной жизнью? Тогда вы обратились по адресу! "
                        />
                    </div>
                    <img src={conga} className={cl.conga} />
                </div>
            </div>
        </div>
    );
};
