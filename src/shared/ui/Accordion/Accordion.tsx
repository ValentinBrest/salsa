import { ReactNode, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';

import cl from './Accordion.module.scss';

interface AccordionProps {
    height?: string;
    className?: string;
    children: ReactNode;
    background?: string;
    linkId?: string
}

export const Accordion = (props: AccordionProps) => {
    const {
        className,
        children,
        height = '400px',
        background,
        linkId,
        ...otherProps
    } = props;

    const [isVisible, setIsVisible] = useState(false);

    const mods: Record<string, boolean> = {
        [cl.open]: isVisible,
    };

    const clOpen = isVisible ? { maxHeight: height } : {};

    const btn = (
        <Button
            background={background}
            theme={ButtonTheme.ARROW}
            onClick={() => setIsVisible(!isVisible)}
            isVisible={isVisible}
        ></Button>
    );

    return (
        <>
            <div
                style={clOpen}
                className={classNames(cl.Accordion, mods, [className])}
                {...otherProps}
            >
                {children}
                <div
                    style={{
                        background: `linear-gradient(to bottom, rgb(255 255 255 / 0%), ${background} 80%)`,
                    }}
                    className={cl.bottom}
                />
            </div>
            {isVisible && linkId ? (
                <LinkScroll to={linkId} smooth={true}>
                    {btn}
                </LinkScroll>
            ) : (
                btn
            )}
        </>
    );
};
