import { useTranslation } from 'react-i18next';
import EmailIcon from 'shared/assets/icons/auth/email.svg';
import PasswordIcon from 'shared/assets/icons/auth/password.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme, Input } from 'shared/ui';

import cl from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean; 
}

export const LoginForm = ({className, isOpen}: LoginFormProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cl.LoginForm, {}, [className])}>
            <div className={cl.wrapInput}>
                <EmailIcon className={cl.icon}/>
                <Input className={cl.input} type="text" placeholder="Email" isOpen={isOpen}/>
            </div>
            <div className={cl.wrapInput}>
                <PasswordIcon className={cl.icon}/>
                <Input className={cl.input} type="password" placeholder="Password"/>
            </div>
            
            <Button 
                theme={ButtonTheme.BACKGROUND_INVERTED} 
                className={cl.loginBtn}
            >
                {t('voiti')}
            </Button>
        </div>
    );
};