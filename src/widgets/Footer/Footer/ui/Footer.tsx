import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';

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
        <footer id="contact" className={classNames(cl.Footer, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    <span className={cl.text}>© 2023 Школа танцев «СальсаБрест»</span>
                    <div className={cl.socialWrap}>
                        <a href={'https://www.instagram.com/salsabrest/'}>
                            <Instagram className={cl.instagram}/>
                        </a>
                        <a href={'https://t.me/salsaworlddance'}>
                            <Telegram className={cl.telegram}/>
                        </a>
                        <a href={'https://www.tiktok.com/@salsabrest1'}>
                            <Tiktok className={cl.tiktok}/>
                        </a>
                        
                    </div>
                    <div className={cl.contactWrap}>
                        <a href={'tel:+375339939039'} className={cl.phoneWrap}>
                            <Phone className={cl.phone}/>
                            <span className={cl.text}>+ 375 33 993 90 39</span>
                        </a>
                        <a href={'malito:SalsaMamboBrest@gmail.by'} className={cl.mailWrap}>
                            <Email className={cl.email}/>
                            <span className={cl.text}>salsabrest@gmail.by</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
