import { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, NavLogo } from 'shared/ui';
import { Drawer } from 'shared/ui/Drawer';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { links } from '../../../../data/links/links';
import guitar from '../../../../public/img/instuments/guitar.webp';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const isTableScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    const navigate = useNavigate();

    const onHandleMenu = () => {
        !isMainPage && navigate('/');
        isMobile && setIsOpenMenu(!isOpenMenu);
    };

    const onToachMove = () => {
        isMobile && setIsOpenMenu(!isOpenMenu);
    };

    const isMainPage = useMemo(() => {
        return location.pathname === '/';
    }, [location]);

    const navLinks = links.map((link) => {
        if (link?.items) {
            return (
                <Drawer
                    items={link.items}
                    name={link.name}
                    onHandleMenu={() => onHandleMenu()}
                    key={link.id}
                />
            );
        } else {
            return (
                <a
                    className='navbarLink link'
                    href={`#${link.scroll}`}
                    key={link.id}
                    onClick={() => onHandleMenu()}
                >
                    {link.name}
                </a>
            );
        }
    });

    useEffect(() => {
        isOpenMenu
            ? document.body.classList.add('lock')
            : document.body.classList.remove('lock');
    }, [isOpenMenu]);

    useEffect(() => {
        setIsMobile(isTableScreen);
    }, [isTableScreen]);

    const menu = document.getElementById('menu');

    useEffect(() => {
        let startTouchY = 0;
        let startTouchX = 0;
        let endTouchY = 0;
        let endTouchX = 0;

        if (menu) {
            menu.addEventListener('touchstart', (event) => {
                startTouchY = event.changedTouches[0].pageY;
                startTouchX = event.changedTouches[0].pageX;
            });

            menu.addEventListener('touchend', (event) => {
                endTouchY = event.changedTouches[0].pageY;
                endTouchX = event.changedTouches[0].pageX;

                if (
                    Math.abs(endTouchX - startTouchX) < 40 &&
                    endTouchY < startTouchY
                )
                    setIsOpenMenu(false);
            });
        }
    }, [menu]);

    return (
        <>
            <header id='up' className={classNames(cl.NavBar, {}, [className])}>
                <div className='container'>
                    <div className={cl.wrap}>
                        <NavLogo />
                        {isMobile && (
                            <Button
                                className={cl.btnBurger}
                                onClick={() => setIsOpenMenu(!isOpenMenu)}
                            >
                                <span
                                    className={classNames(
                                        cl.burger,
                                        { [cl.active]: isOpenMenu },
                                        [className]
                                    )}
                                />
                            </Button>
                        )}

                        {!isMobile && (
                            <nav className={cl.links}>{navLinks}</nav>
                        )}
                        <ThemeSwitcher className={cl.switcher} />
                    </div>
                </div>
            </header>
            {isMobile && (
                <div
                    id='menu'
                    onScroll={() => onToachMove()}
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
                    {navLinks}
                </div>
            )}
        </>
    );
};
