import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme, Input } from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cl from './Form.module.scss';

interface FormProps {
    className?: string;
}

export const Form = ({ className }: FormProps) => {

    return (
        <div className={classNames(cl.Form, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    <div className={cl.formInner}>
                        <Text theme={TextTheme.WITHOUT} title="ЗАПИШИТЕСЬ НА ПЕРВЫЙ УРОК"/>

                        <Input placeholder="Имя"/>
                        <Input placeholder="Фамилия"/>
                        <Input placeholder="Номер телефона"/>

                        <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L} className={cl.button}>Отправить</Button>
                        <span className={cl.text}>{'*Нажимая на кнопку "Отправить", вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности'}</span>
                         
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
