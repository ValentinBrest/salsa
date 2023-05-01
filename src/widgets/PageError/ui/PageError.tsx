import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';

import cl from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cl.PageError, {}, [className])}>
            <p>Возникла непредвиденная ошибка</p>
            <Button 
                onClick={reloadPage} 
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                Обновить страницу
            </Button>
        </div>
    );
};