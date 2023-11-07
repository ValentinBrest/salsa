import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import pin from '../../../../public/img/pin.png';

import cl from './Card.module.scss';

interface CardProps {
    className?: string;
    children?: ReactNode;
    background?: string;
}

export const Card = memo((props: CardProps) => {
    const { className, children, background } = props;

    return (
        <div
            style={{ background: background }}
            className={classNames(cl.Card, {}, [className])}
        >
            <img src={pin} className={cl.left} />
            <img src={pin} className={cl.right} />
            {children}
        </div>
    );
});
