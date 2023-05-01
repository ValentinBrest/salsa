import { classNames } from 'shared/lib/classNames/classNames';

import cl from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    return (
        <div className={classNames(cl.NotFoundPage, {}, [className])}>
            Страница не найдена
        </div>
    );
};