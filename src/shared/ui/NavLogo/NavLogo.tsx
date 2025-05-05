import cl from './NavLogo.module.scss';
import logo from '../../../../public/img/logo.webp';
import { classNames } from 'shared/lib/classNames/classNames';

interface NavLogoProps {
    className?: string;
}

export const NavLogo = ({ className = '' }: NavLogoProps) => {
    return (
        <a
            href='/'
            className={classNames(cl.linkLogo, {}, [className])}
            key={'salsa'}
        >
            <img loading='lazy' src={logo} className={cl.logo} alt='logo' />
        </a>
    );
};
