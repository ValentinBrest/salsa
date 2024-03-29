import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    TABS = 'tabs',
    ARROW = 'arrow',
    PERSPECTIVE = 'perspective',
}
export const enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    isVisible?: boolean;
    background?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled = false,
        isVisible,
        background,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cl.square]: square,
        [cl.open]: isVisible,
    };

    return (
        <button
            type='button'
            disabled={disabled}
            style={{ background: background }}
            className={classNames(cl.Button, mods, [
                className,
                cl[theme],
                cl[size],
            ])}
            {...otherProps}
        >
            {theme === 'arrow' ? (
                <div className={cl.arrowWrap}>
                    <span className={cl.arrowLeft}></span>
                    <span className={cl.arrowRight}></span>
                </div>
            ) : theme === 'perspective' ? (
                <span className={cl.perspectiveInner}>{children}</span>
            ) : (
                children
            )}
        </button>
    );
};
