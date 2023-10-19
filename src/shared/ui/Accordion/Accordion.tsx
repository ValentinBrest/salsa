import { ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';

import cl from './Accordion.module.scss';


interface AccordionProps {
    height?: string;
    className?: string;
    children: ReactNode;
}


export const Accordion = (props: AccordionProps) => {
    const {
        className, 
        children, 
        height ='400px',
        ...otherProps
    } = props;

    const [isVisible, setIsVisible] = useState(false);

    const mods: Record<string, boolean> = {
        [cl.open]: isVisible,
    };


    return (
        <>
            <div
                className={classNames(cl.Accordion, mods, [className])}
                {...otherProps}
            >
                {children}
                <div className={cl.bottom}/>
            </div>
            <Button
                theme={ButtonTheme.ARROW}
                onClick={() => setIsVisible(!isVisible)}
                isVisible={isVisible}
            >
            </Button>
        </>
    );
};