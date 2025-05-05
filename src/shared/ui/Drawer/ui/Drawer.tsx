import cl from './Drawer.module.scss';
import DownIcon from '../../../../../public/icon/down.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { LinkScroll } from 'shared/ui';

interface Item {
    id: number;
    name: string;
    to: string;
    scroll: string;
}

interface DrawerProps {
    name: string;
    items: Item[];
    className?: string;
    onHandleMenu: () => void;
}

export const Drawer = ({
    className = '',
    name,
    items,
    onHandleMenu,
}: DrawerProps) => {

    return (
        <div className={classNames(cl.Drawer, {}, [className])}>
            <div className={cl.name}>
                {name}
                <DownIcon className={cl.icon}/>
            </div>
            <div className={cl.content}>
                {items.map((link) => (
                    <LinkScroll
                        href='/'
                        className={cl.link}
                        name={link.name}
                        to={link.scroll}
                        key={link.id}
                        onClick={() => onHandleMenu()}
                        isDrawerLink={true}
                    />
                ))}
            </div>
        </div>
    );
};
