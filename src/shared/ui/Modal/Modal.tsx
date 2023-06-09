import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { Portal } from 'shared/ui/Portal/Portal';

import cl from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    isMounted: boolean;
}

export const Modal = (props: ModalProps) => {
    const { 
        className, 
        children, 
        isOpen, 
        onClose, 
        lazy, 
        isMounted,
    } = props;

    const mods: Record<string, boolean> = {
        [cl.opened]: isOpen,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cl.Modal, mods, [className])}>
                <div className={cl.overlay} onClick={closeHandler}>
                    <div className={cl.content} onClick={onContentClick}>
                        <Button
                            onClick={closeHandler}
                            square
                            size={ButtonSize.M}
                            theme={ButtonTheme.CLEAR}
                            className={cl.close}
                        >
                        </Button>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
