import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { links } from '../../../../data/links/links';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cl.NavBar, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    <div className={cl.logoWrap}>
                        <div className={cl.logo}>salsa forever</div>
                    </div>
                    <div className={cl.line}>
                        {<ThemeSwitcher className={cl.switcher} />}
                    </div>
                    <div className={cl.links}>
                        {links.map((item) => (
                            <LinkScroll to={item.scroll} key={item.id} smooth={true}>
                                <AppLink
                                    to={item.to}
                                    className={cl.link}
                                    key={item.id}
                                >
                                    {item.name}
                                </AppLink>
                            </LinkScroll>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
