import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';

import konstantin from '../../../../public/images/konstantin.jpg';
import valentin from '../../../../public/images/valentin.jpg';
import image from '../../../../public/intro.jpg';

import cl from './Intro.module.scss';

interface IntroProps {
    className?: string;
}

export const Intro = ({ className }: IntroProps) => {
    const { t } = useTranslation();

    const leftBackground = {
        background: `bottom / contain no-repeat url(${valentin})`,
    };
    const rightBackground = {
        background: `bottom  / contain no-repeat url(${konstantin})`,
    };
    return (
        <div className={classNames(cl.Intro, {}, [className])}>
            <div className={cl.wrap}>
                <div className={cl.left}>
                    <div style={leftBackground} className={cl.leftInner}></div>
                </div>
                <div className={cl.center}>
                    <div className={cl.centerInner}>
                        <h1 className={cl.title}>САЛЬСА</h1>
                        <h2 className={cl.subtitle}>БРЕСТ</h2>
                        <Button
                            size={ButtonSize.XL}
                            theme={ButtonTheme.OUTLINE}
                        >
                            Хочу танцевать
                        </Button>
                    </div>
                </div>
                <div className={cl.right}>
                    <div style={rightBackground} className={cl.rightInner}></div>
                </div>
            </div>
        </div>
    );
};
