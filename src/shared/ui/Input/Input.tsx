import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    isOpen?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        isOpen,
        ...otherProps
    } = props;

    const refInput = useRef<HTMLInputElement>();

    useEffect(() => {
        if (isOpen) {
            refInput.current.focus();
        }
    }, [isOpen]);

    return (
        <input
            ref={refInput}
            className={classNames(cl.Input, {}, [className])}
            type={type}
            value={value}
            placeholder={placeholder}
            {...otherProps}
        />
    );
});
