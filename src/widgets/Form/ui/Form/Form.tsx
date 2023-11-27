import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import dance from '../../../../../public/img/dance.webp';
import Mail from '../../../../../public/img/mail.svg';
import Instagram from '../../../../shared/assets/icons/social/instagram.svg';
import Telegram from '../../../../shared/assets/icons/social/telegram.svg';
import cl from './Form.module.scss';

interface FormProps {
    className?: string;
    backgroundColor?: string;
}

export const Form = ({ className, backgroundColor }: FormProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
        threshold: 0.05,
    });

    return (
        <section
            style={{ background: backgroundColor }}
            id='form'
            className={classNames(cl.Form, {}, [className])}
            ref={triggerRef}
        >
            <div className='container'>
                <div
                    className={classNames(
                        cl.wrap,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    <div>
                        <Text
                            theme={TextTheme.WITHOUT}
                            title='ЗАПИШИТЕСЬ НА ПЕРВЫЙ УРОК'
                        />
                        <div className={cl.send}>
                            <Text
                                className={cl.withoutMargin}
                                text={'Для этого отправьте сообщение'}
                            />
                            <div className={cl.wantToDance}>
                                <span>"Хочу танцевать сальсу"</span>
                            </div>
                            <Text
                                className={cl.withoutMargin}
                                text={' в директ'}
                            />
                            <div className={cl.wrapSocial}>
                                <a
                                    href='https://www.instagram.com/salsabrest/'
                                    aria-label='Перейти в инстаграм'
                                >
                                    <Instagram className={cl.insta} />
                                </a>
                                <a
                                    href='https://t.me/salsabrestdirect'
                                    aria-label='Перейти в телеграм'
                                >
                                    <Telegram className={cl.telega} />
                                </a>
                            </div>
                            <Text text={'или напишите нам на почту'} />
                            <a
                                href={'mailto:info@salsabrest.by'}
                                className={cl.mailWrap}
                            >
                                <Mail className={cl.mail} />
                                <Text text={'info@salsabrest.by'} />
                            </a>
                        </div>
                    </div>

                    <img
                        loading='lazy'
                        src={dance}
                        className={cl.formImg}
                        alt='все на танцы'
                    />
                </div>
            </div>
        </section>
    );
};
