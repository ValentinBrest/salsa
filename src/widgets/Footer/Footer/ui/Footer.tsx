import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Input } from 'shared/ui';

import cl from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const { t } = useTranslation();

    return (
        <footer className={classNames(cl.Footer, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    Footer
                </div>
            </div>
        </footer>
    );
};
