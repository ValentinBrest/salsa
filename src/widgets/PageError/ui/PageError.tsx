import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';

import cl from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cl.PageError, {}, [className])}>
            <p>{t('voznikla-nepredvidennaya-oshibka')}</p>
            <Button 
                onClick={reloadPage} 
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t('obnovit-stranicu')}
            </Button>
        </div>
    );
};