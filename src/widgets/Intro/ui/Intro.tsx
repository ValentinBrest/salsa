import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';

import konstantin from '../../../../public/img/konstantin.jpg';
import valentin from '../../../../public/img/valentin.jpg';

import cl from './Intro.module.scss';

interface IntroProps {
    className?: string;
}

export const Intro = ({ className }: IntroProps) => {
    const { t } = useTranslation();

    const rightBackground = {
        background: `center / cover no-repeat url(${valentin})`,
    };
    const leftBackground = {
        background: `center  / cover no-repeat url(${konstantin})`,
    };
    return (
        <div className={classNames(cl.Intro, {}, [className])}>
            <div className={cl.wrap}>
                <div style={leftBackground} className={cl.left}></div>
                <div className={cl.center}>
                    <h1 className={cl.title}>САЛЬСА</h1>
                    <h2 className={cl.subtitle}>БРЕСТ</h2>
                    <Button
                        size={ButtonSize.XL}
                        theme={ButtonTheme.OUTLINE}
                    >
                        Хочу танцевать
                    </Button>
                </div>
                <div style={rightBackground} className={cl.right}></div>
            </div>
        </div>
    );
};
