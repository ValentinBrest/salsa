import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Input } from 'shared/ui';

import cl from './Form.module.scss';

interface FormProps {
    className?: string;
}

export const Form = ({ className }: FormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.Form, {}, [className])}>
            <div className="container">
                <h2 className={cl.title}>ЗАПИШИТЕСЬ НА ПЕРВЫЙ УРОК</h2>
                <div className={cl.wrap}>
                    <Input/>
                    <Input/>
                    <Input/>
                    <Button>Отправить</Button>
                </div>
            </div>
        </div>
    );
};
