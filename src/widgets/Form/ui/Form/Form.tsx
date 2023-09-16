import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import dance from '../../../../../public/img/dance.jpg';
import Instagram from '../../../../shared/assets/icons/social/instagram.svg';
import Telegram from '../../../../shared/assets/icons/social/telegram.svg';

import cl from './Form.module.scss';

interface FormProps {
    className?: string;
    backgroundColor?: string ;
}

export const Form = ({ className, backgroundColor }: FormProps) => {
    const Background = {
        background: `center / cover no-repeat url(${dance})`,
    };

    return (
        <div style={{background: backgroundColor}} id="form" className={classNames(cl.Form, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    <div className={cl.descr}>
                        <Text theme={TextTheme.WITHOUT} title="ЗАПИШИТЕСЬ НА ПЕРВЫЙ УРОК"/>
                        <div className={cl.send}>
                            <Text className={cl.withoutMargin} text={'Для этого отправьте сообщение '}/>
                            <div className={cl.wantToDance}><span>"Хочу танцевать сальсу"</span></div>
                            <Text className={cl.withoutMargin} text={' в директ нашей страницы в '}/>
                            <a href="https://www.instagram.com/salsabrest/">
                                <Instagram className={cl.insta}/>
                            </a>
                            <Text text={'или в'}/>
                            <a href={'https://t.me/salsaworlddance'} >
                                <Telegram className={cl.telegram}/>
                            </a>
                        </div>
                    </div>
                    
                    <div style={Background} className={cl.dance}></div>
                </div>
            </div>
        </div>
    );
};
