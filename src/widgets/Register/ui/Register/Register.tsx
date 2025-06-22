import { Template, Text, TextTheme } from 'shared/ui';

import { register } from '../../../../../data/register';
import Mail from '../../../../../public/icon/mail.svg';
import Instagram from '../../../../../public/icon/social/instagram.svg';
import Telegram from '../../../../../public/icon/social/telegram.svg';
import dance from '../../../../../public/img/dance.webp';

import cl from './Register.module.scss';

interface RegisterProps {
    className?: string;
    backgroundColor?: string;
    eventName?: string
}

export const Register = ({ backgroundColor, eventName = 'ПРОБНЫЙ УРОК' }: RegisterProps) => {
    const {title, suptitle, message, toDirect, direct, messagePost} = register;
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Register}
            id={register.id}
            classWrap={cl.wrap}
        >
            <div>
                <Text theme={TextTheme.WITHOUT} title={`${title} ${eventName}`} />
                <div className={cl.send}>
                    <Text className={cl.withoutMargin} text={suptitle} />
                    <div className={cl.wantToDance}>
                        <span>{message}</span>
                    </div>
                    <Text className={cl.withoutMargin} text={toDirect} />
                    <div className={cl.social}>
                        <a
                            href='https://www.instagram.com/salsabrest/'
                            aria-label='Перейти в инстаграм'
                        >
                            <Instagram className={cl.insta}
                            />
                        </a>
                        <a
                            href='https://t.me/salsabrestdirect'
                            aria-label='Перейти в телеграм'
                            className={cl.direct}
                            data-text={direct}
                        >
                            <Telegram className={cl.telega}
                            />
                        </a>
                    </div>
                    <Text text={messagePost} />
                    <a href={`mailto:${register.mail}`} className={cl.mailWrap}>
                        <Mail className={cl.mail}
                        />
                        <Text text={register.mail} />
                    </a>
                </div>
            </div>

            <img
                src={dance}
                className={cl.registerImg}
                alt='все на танцы'
            />
        </Template> 
    );
};
