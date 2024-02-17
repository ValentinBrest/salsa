import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { links } from '../../../../data/links/links';
import guitar from '../../../../public/img/instuments/guitar.webp';
import logo from '../../../../public/img/logo.webp';
import newProjects from '../../../../public/img/new.webp';
import cl from './NavBar.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [disableThemeSwitcher, setDisableThemeSwitcher] = useState(false);
    const { theme } = useTheme();
    const onHandleMenu = () => setIsOpenMenu(!isOpenMenu);

    useEffect(() => {
        isOpenMenu
            ? document.body.classList.add('lock')
            : document.body.classList.remove('lock');
    }, [isOpenMenu]);

    useEffect(() => {
        if (theme === Theme.SALSAMANIA) {
            setDisableThemeSwitcher(true);
        } else {
            setDisableThemeSwitcher(false);
        }
    }, [theme]);

    return (
        <>
            <header id='up' className={classNames(cl.NavBar, {}, [className])}>
                <div className='container'>
                    <div className={cl.wrap}>
                        <a
                            href='https://salsabrest.by'
                            className={cl.linkLogo}
                            key={'salsa'}
                        >
                            <img
                                className={cl.logo}
                                src={logo}
                                alt='salsa-brest'
                            />
                        </a>

                        <div
                            className={classNames(
                                cl.burger,
                                { [cl.active]: isOpenMenu },
                                [className]
                            )}
                            onClick={onHandleMenu}
                        />

                        <nav className={cl.links}>
                            {links.map((item, index) => (
                                <LinkScroll
                                    to={item.scroll}
                                    href='/'
                                    key={item.id}
                                    smooth={true}
                                    className={cl.link}
                                >
                                    {index === 0 && (
                                        <img
                                            className={cl.newProjects}
                                            src={newProjects}
                                            alt='newProjects'
                                        />
                                    )}
                                    <AppLink to={item.to} key={item.id}>
                                        {item.name}
                                    </AppLink>
                                </LinkScroll>
                            ))}
                        </nav>
                        {disableThemeSwitcher ? (
                            <div
                                style={{ width: '40px', height: '40px' }}
                            ></div>
                        ) : (
                            <ThemeSwitcher className={cl.switcher} />
                        )}
                    </div>
                </div>
            </header>
            {
                <nav
                    className={classNames(cl.menu, {
                        [cl.visible]: isOpenMenu,
                    })}
                >
                    <img
                        loading='lazy'
                        src={guitar}
                        className={cl.guitar}
                        alt='гитара'
                    />
                    {links.map((item) => (
                        <LinkScroll
                            href='/'
                            className={cl.mobileLink}
                            to={item.scroll}
                            key={item.id}
                            smooth={true}
                            onClick={onHandleMenu}
                        >
                            <AppLink to={item.to} key={item.id}>
                                {item.name}
                            </AppLink>
                        </LinkScroll>
                    ))}
                </nav>
            }
        </>
    );
};
