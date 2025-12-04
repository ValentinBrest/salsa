import { Link } from 'react-router-dom';
import { Button, ButtonTheme } from 'shared/ui';

import notFound from '../../../../public/img/404.webp';

import cl from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({}: NotFoundPageProps) => {

    const bgFirst = 'var(--bg-color-second)';

    return (
        <div className={cl.NotFoundContent} style={{ background: bgFirst }}>
            <img className={cl.img} src={notFound} alt='404' />
            <div className={cl.info}>
                <h2 style={{ marginBottom: '10px' }}>Страница не найдена</h2>
                <Button theme={ButtonTheme.OUTLINE} className={cl.btn}>
                    <Link className={cl.link} to='/'>
                        На главную
                    </Link>
                </Button>
            </div>
        </div>
    );
};