import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';

import { links } from '../../../../data/links/links';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.NavBar, {}, [className])}>
            <div className='container'>
                <div className={cl.wrap}>
                    <div className={cl.logoWrap}>
                        <div className={cl.logo}>salsa forever</div>
                        <div className={cl.line}></div>
                    </div>
                    <div className={cl.links}>
                        {links.map((item) => (
                            <AppLink
                                to={item.to}
                                className={cl.link}
                                key={item.id}
                            >
                                {item.name}
                            </AppLink>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};
