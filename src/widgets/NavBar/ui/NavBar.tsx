import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import {
    LOCAL_STORAGE_THEME_KEY,
    LOCAL_STORAGE_THEME_KEY_PREVIOUS,
} from 'app/providers/ThemeProvider/lib/ThemeContext';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { links } from '../../../../data/links/links';
import guitar from '../../../../public/img/instuments/guitar.webp';
import logo from '../../../../public/img/logo.webp';
import newProjects from '../../../../public/img/new.webp';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
    setIsSalsamaniaTheme: (value: boolean) => void;
}

export const NavBar = ({ className, setIsSalsamaniaTheme }: NavBarProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [disableThemeSwitcher, setDisableThemeSwitcher] = useState(false);
    const { theme, setSalsaManiaTheme, setTheme } = useTheme();
    const onHandleMenu = (scroll: string, isTableScreen) => {
        if (scroll === 'project') {
            setSalsaManiaTheme();
            setIsSalsamaniaTheme(true);
            isTableScreen && setIsOpenMenu(!isOpenMenu);
        } else {
            const newTheme =
                localStorage.getItem(LOCAL_STORAGE_THEME_KEY_PREVIOUS) ||
                Theme.LIGHT;
            setIsSalsamaniaTheme(false);
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
            isTableScreen && setIsOpenMenu(!isOpenMenu);
        }
    };

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
                            onClick={() => setIsOpenMenu(!isOpenMenu)}
                        />

                        <nav className={cl.links}>
                            {links.map((item, index) => (
                                <LinkScroll
                                    to={item.scroll}
                                    href='/'
                                    key={item.id}
                                    smooth={true}
                                    className={cl.link}
                                    onClick={() => onHandleMenu(item.scroll, false)}
                                >
                                    {/* {index === 0 && (
                                        <img
                                            className={cl.newProjects}
                                            src={newProjects}
                                            alt='newProjects'
                                        />
                                    )} */}
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
                    {links.map((item, index) => (
                        <LinkScroll
                            href='/'
                            className={cl.mobileLink}
                            to={item.scroll}
                            key={item.id}
                            smooth={true}
                            onClick={() => onHandleMenu(item.scroll, true)}
                        >
                            {/* {index === 0 && (
                                <img
                                    className={cl.newProjects}
                                    src={newProjects}
                                    alt='newProjects'
                                />
                            )} */}
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
