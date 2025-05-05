import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, LinkScroll, NavLogo } from 'shared/ui';

import { links } from '../../../../data/links/links';
import guitar from '../../../../public/img/instuments/guitar.webp';

import { useMediaQuery } from 'react-responsive';
import { Drawer } from 'shared/ui/Drawer';
import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
    setIsSalsamaniaTheme: (value: boolean) => void;
}

export const NavBar = ({ className, setIsSalsamaniaTheme }: NavBarProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const isTableScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const [isMobile, setIsMobile] = useState(false);
    const onHandleMenu = () => {
        isMobile && setIsOpenMenu(!isOpenMenu);
    };

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
                <LinkScroll
                    href='/'
                    className='navbarLink'
                    name={link.name}
                    to={link.scroll ?? '/'}
                    key={link.id}
                    onClick={() => onHandleMenu()}
                />
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
                    </div>
                </div>
            </header>
            {isMobile && (
                <div
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
