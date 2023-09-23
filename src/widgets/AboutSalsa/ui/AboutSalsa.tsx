import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import conga from '../../../../public/img/instuments/conga.png';

import cl from './AboutSalsa.module.scss';

interface AboutSalsaProps {
    className?: string;
    backgroundColor?: string;
}

export const AboutSalsa = ({ className, backgroundColor }: AboutSalsaProps) => {

    return (
        <div
            style={{ background: backgroundColor }}
            id="salsa"
            className={classNames(cl.AboutSalsa, {}, [className])}
        >
            <div className="container">
                <div className={cl.wrap}>
                    <div className={cl.decr}>
                        <Text
                            text={<><b>Сальса</b> – музыкальный термин, включающий в себя множество разновидностей  ритмических стилей и музыкальных форм, но на нашем сайте под словом «сальса» мы будем подразумевать именно танец.</>} 
                        />
                        <Text
                            text="Итак. Сальса – популярный латиноамериканский танец, который танцуют по всему миру. Хотите танцевать сальсу дома, на сальса-вечеринках в Бресте, в Минске или практически в любом крупном (и не только) городе мира? Хотите удивлять родных, друзей, знакомых и коллег на торжествах, в клубах и на корпоративах? Хотите просто быть здоровыми и жить полноценной жизнью? Тогда вы обратились по адресу!"
                        />
                    </div>
                    <img src={conga} className={cl.conga} />
                </div>
            </div>
        </div>
    );
};
