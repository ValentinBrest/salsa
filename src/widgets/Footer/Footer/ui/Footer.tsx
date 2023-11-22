import { classNames } from 'shared/lib/classNames/classNames';

import Email from '../../../../shared/assets/icons/social/email.svg';
import Instagram from '../../../../shared/assets/icons/social/instagram.svg';
import Phone from '../../../../shared/assets/icons/social/phone.svg';
import Telegram from '../../../../shared/assets/icons/social/telegram.svg';
import Tiktok from '../../../../shared/assets/icons/social/tiktok.svg';

import cl from './Footer.module.scss';

interface FooterProps {
    className?: string;
    backgroundColor?: string ;
}

export const Footer = ({ className, backgroundColor }: FooterProps) => {

    return (
        <footer style={{ background: backgroundColor }} id="contact" className={classNames(cl.Footer, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    <span className={cl.text}>© 2023 Школа танцев «СальсаБрест»</span>
                    <div className={cl.socialWrap}>
                        <a href={'https://www.instagram.com/salsabrest/'} aria-label="Перейти в инстаграм">
                            <Instagram className={cl.instagram}/>
                        </a>
                        <a href={'https://t.me/salsaworlddance'} aria-label="Перейти в телеграм">
                            <Telegram className={cl.telegram}/>
                        </a>
                        <a href={'https://www.tiktok.com/@salsabrest1'} aria-label="Перейти в тикток">
                            <Tiktok className={cl.tiktok}/>
                        </a>
                        
                    </div>
                    <div className={cl.contactWrap}>
                        <a href={'tel:+375339939039'} className={cl.phoneWrap}>
                            <Phone className={cl.phone}/>
                            <span className={cl.text}>+ 375 33 99 39 0 39</span>
                        </a>
                        <a href={'malito:info@salsabrest.by'} className={cl.mailWrap}>
                            <Email className={cl.email}/>
                            <span className={cl.text}>info@salsabrest.by</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
