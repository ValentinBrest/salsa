import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { links } from '../../../../data/links/links';
import guitar from '../../../../public/img/instuments/guitar.png';
import logo from '../../../../public/img/logo.png';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const onHandleMenu = () => setIsOpenMenu(!isOpenMenu);

    useEffect(() => {
        isOpenMenu
            ? document.body.classList.add('lock')
            : document.body.classList.remove('lock');
    }, [isOpenMenu]);

    return (
        <>
            <div id="up" className={classNames(cl.NavBar, {}, [className])}>
                <div className="container">
                    <div className={cl.wrap}>
                        <AppLink
                            to="/"
                            className={cl.linkLogo}
                            key={'salsa'}
                            theme={AppLinkTheme.BUTTON}
                        >
                            <img
                                className={cl.logo}
                                src={logo}
                                alt="salsa-brest"
                            />
                        </AppLink>

                        <div
                            className={classNames(cl.burger, {[cl.active]: isOpenMenu}, [className])}
                            onClick={onHandleMenu}
                        />

                        <div className={cl.links}>
                            {links.map((item) => (
                                <LinkScroll
                                    to={item.scroll}
                                    key={item.id}
                                    smooth={true}
                                    className={cl.link}
                                >
                                    <AppLink to={item.to} key={item.id}>
                                        {item.name}
                                    </AppLink>
                                </LinkScroll>
                            ))}
                        </div>
                        {<ThemeSwitcher className={cl.switcher} />}
                    </div>
                </div>
            </div>
            {
                <div
                    className={classNames(cl.menu, {
                        [cl.visible]: isOpenMenu,
                    })}
                >
                    <img src={guitar} className={cl.guitar} />
                    {links.map((item) => (
                        <LinkScroll
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
                </div>
            }
        </>
    );
};
