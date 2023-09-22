import { useState } from 'react';
import { RoutePath } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
    Button,
    ButtonSize,
    ButtonTheme,
} from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import conga from '../../../../public/img/instuments/conga.png';

import cl from './About.module.scss';

interface AboutProps {
    className?: string;
    backgroundColor?: string;
}

export const About = ({ className, backgroundColor }: AboutProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            style={{ background: backgroundColor }}
            id='about'
            className={classNames(cl.About, {}, [className])}
        >
            <div className='container'>
                <div className={cl.wrap}>
                    <div className={cl.decr}>
                        {/* <Text title='Почему Сальса' /> */}

                        <Text
                            text='Сальса – музыкальный термин, включающий в себя множество разновидностей  ритмических стилей и музыкальных форм, но на нашем сайте под словом «сальса» мы будем подразумевать именно танец. '
                        />
                        <Text
                            text='Итак. Сальса – популярный латиноамериканский танец, который танцуют по всему миру. Хотите танцевать сальсу дома, на сальса-вечеринках в Бресте, в Минске или практически в любом крупном (и не только) городе мира? Хотите удивлять родных, друзей, знакомых и коллег на торжествах, в клубах и на корпоративах? Хотите просто быть здоровыми и жить полноценной жизнью? Тогда вы обратились по адресу!'
                        />
                    </div>
                    <img src={conga} className={cl.conga} />
                    {/* <div className={cl.pick}></div> */}
                </div>
            </div>
        </div>
    );
};
