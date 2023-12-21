import { classNames } from 'shared/lib/classNames/classNames';

import Email from '../../../../shared/assets/icons/social/email.svg';
import Instagram from '../../../../shared/assets/icons/social/instagram.svg';
import Phone from '../../../../shared/assets/icons/social/phone.svg';
import Telegram from '../../../../shared/assets/icons/social/telegram.svg';
import Tiktok from '../../../../shared/assets/icons/social/tiktok.svg';
import { footer } from '../../../../../data/footer';
import cl from './Footer.module.scss';

interface FooterProps {
    className?: string;
    backgroundColor?: string;
}

export const Footer = ({ className, backgroundColor }: FooterProps) => {
    return (
        <footer
            style={{ background: backgroundColor }}
            id='contact'
            className={classNames(cl.Footer, {}, [className])}
        >
            <div className='container'>
                <div className={cl.wrap}>
                    <div className={cl.wrapText}>
                        <span className={cl.text}>
                            {footer.name}
                        </span>
                        <span className={cl.text}>{footer.unp}</span>
                    </div>
                    <div className={cl.socialWrap}>
                        <a
                            href={'https://www.instagram.com/salsabrest/'}
                            aria-label='Перейти в инстаграм'
                        >
                            <Instagram className={cl.instagram} />
                        </a>
                        <a
                            href={'https://t.me/salsabrest'}
                            aria-label='Перейти в телеграм'
                            className={cl.direct}
                            data-text={footer.telegramLabel}
                        >
                            <Telegram className={cl.telegram} />
                        </a>
                        <a
                            href={'https://www.tiktok.com/@salsabrest1'}
                            aria-label='Перейти в тикток'
                        >
                            <Tiktok className={cl.tiktok} />
                        </a>
                    </div>
                    <div className={cl.contactWrap}>
                        <a href={`tel:${footer.tel}`} className={cl.phoneWrap}>
                            <Phone className={cl.phone} />
                            <span className={cl.text}>{footer.tel}</span>
                        </a>
                        <a
                            href={`mailto:${footer.mail}`}
                            className={cl.mailWrap}
                        >
                            <Email className={cl.email} />
                            <span className={cl.text}>{footer.mail}</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
