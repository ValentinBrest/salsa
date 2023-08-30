import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    WITHOUT = 'without',
    ITALIC = 'italic',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    subTitle?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        subTitle,
        theme = TextTheme.PRIMARY,
        align = TextAlign.CENTER,
    } = props;
    
    return (
        < >
            {title && <div className={classNames(cl.title, {[cl[theme]]: true}, [className, cl[align]])} >
                <span>{title}</span>
            </div>}

            {subTitle && <div className={classNames(cl.subTitle, {[cl[theme]]: true}, [className, cl[align]])}>{subTitle}</div>}

            {text && <div className={classNames(cl.text, {[cl[theme]]: true}, [className, cl[align]])} >{text}</div>}
        </>
    );
});