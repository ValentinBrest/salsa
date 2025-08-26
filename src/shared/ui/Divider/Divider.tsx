import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Divider.module.scss';

export type DividerOrientation = 'horizontal' | 'vertical';

interface DividerProps {
    className?: string;
    orientation?: DividerOrientation;
    margin?: string;
}

export const Divider = memo((props: DividerProps) => {
    const { className = ''} = props;

    return (
        <div
            className={classNames(cl.Divider, {}, [className])}
        >
            
        </div>
    );
});
