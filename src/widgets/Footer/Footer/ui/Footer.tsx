import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';

import Email from '../../../../shared/assets/icons/social/email.svg';
import Instagram from '../../../../shared/assets/icons/social/instagram.svg';
import Phone from '../../../../shared/assets/icons/social/phone.svg';
import Telegram from '../../../../shared/assets/icons/social/telegram.svg';
import Tiktok from '../../../../shared/assets/icons/social/tiktok.svg';

// import Viber from '../../../../shared/assets/icons/social/viber.svg';
// import Vk from '../../../../shared/assets/icons/social/vk.svg';
// import Youtube from '../../../../shared/assets/icons/social/youtube.svg';
import cl from './Footer.module.scss';

interface FooterProps {
    className?: string;
    backgroundColor?: string ;
}

export const Footer = ({ className, backgroundColor }: FooterProps) => {

    return (
        <footer style={{background: backgroundColor}} id="contact" className={classNames(cl.Footer, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    <span className={cl.text}>© 2007-2023 Школа танцев «СальсаБрест»</span>
                    <div className={cl.socialWrap}>
                        <AppLink to={'https://www.instagram.com/'} theme={AppLinkTheme.ICON}>
                            <Instagram className={cl.instagram}/>
                        </AppLink>
                        <AppLink to={'https://web.telegram.org/z/'} theme={AppLinkTheme.ICON}>
                            <Telegram className={cl.telegram}/>
                        </AppLink>
                        <AppLink to={'https://web.telegram.org/z/'} theme={AppLinkTheme.ICON}>
                            <Tiktok className={cl.tiktok}/>
                        </AppLink>
                        
                    </div>
                    <div className={cl.contactWrap}>
                        <a href={'tel:+375339939039'} className={cl.phoneWrap}>
                            <span className={cl.text}>+ 375 33 993 90 39</span>
                            <Phone className={classNames(cl.phone, {}, [])}/>
                        </a>
                        <a href={'malito:SalsaMamboBrest@gmail.by'} className={cl.mailWrap}>
                            <span className={cl.text}>SalsaMamboBrest@gmail.by</span>
                            <Email className={classNames(cl.email, {}, [])}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
