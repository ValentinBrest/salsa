import { memo, ReactNode } from 'react';
import { Link as ReactLinkScroll } from 'react-scroll';
import { classNames } from 'shared/lib/classNames/classNames';

interface LinkScrollProps {
    to: string;
    href?: string;
    name?: string;
    className?: string;
    onClick?: () => void;
    isDrawerLink?: boolean;
    children?: ReactNode;
}

export const LinkScroll = memo((props: LinkScrollProps) => {
    const {
        to,
        className = '',
        name,
        isDrawerLink = false,
        onClick,
        children
    } = props;

    return (
        <ReactLinkScroll
            to={to}
            smooth={true}
            className={classNames(
                '',
                { drawerLink: isDrawerLink, link: !isDrawerLink },
                [className]
            )}
            onClick={onClick}
        >
            {name || children}
        </ReactLinkScroll>
    );
});
