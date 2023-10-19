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
    ARROW = 'arrow'
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
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cl.square]: square,
        [cl.open]: isVisible,
    };

    return (
        <button 
            type="button"
            disabled={disabled}
            className={classNames(cl.Button, mods, [className, cl[theme], cl[size]])}
            {...otherProps}
        >
            {theme === 'arrow' 
                ? <div className={cl.arrowWrap}>
                    <span className={cl.arrowLeft}></span>
                    <span className={cl.arrowRight}></span>
                </div>
                : children}
        </button>
    );
};