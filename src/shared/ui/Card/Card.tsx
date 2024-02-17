import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import pin from '../../../../public/img/pin.webp';

import cl from './Card.module.scss';

interface CardProps {
    className?: string;
    children?: ReactNode;
    background?: string;
    withoutPic?: boolean;
}

export const Card = memo((props: CardProps) => {
    const { className, children, background, withoutPic = true } = props;

    return (
        <div
            style={{ background: background }}
            className={classNames(cl.Card, {}, [className])}
        >
            {withoutPic || <img src={pin} className={cl.left} alt='left' />}
            {withoutPic || <img src={pin} className={cl.right} alt='right' />}
            {children}
        </div>
    );
});
