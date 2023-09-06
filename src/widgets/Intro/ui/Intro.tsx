import { Link as LinkScroll } from 'react-scroll';
import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';

import Klaksa from '../../../../public/img/klaksa.svg';
import konstantin from '../../../../public/img/konstantin.jpg';
import valentin from '../../../../public/img/valentin.jpg';

import cl from './Intro.module.scss';

interface IntroProps {
    className?: string;
    backgroundColor?: string ;
}

export const Intro = ({ className, backgroundColor }: IntroProps) => {

    const images = [
        { url: konstantin },
        { url: valentin },
    ];

    const images2 = [
        { url: valentin },
        { url: konstantin },
    ];
      
    return (
        <div style={{background: backgroundColor}} className={classNames(cl.Intro, {}, [className])}>
            <div className={cl.wrap}>
                <div className={cl.left}>
                    <SimpleImageSlider
                        width={'100%'}
                        height={'100%'}
                        images={images}
                        showBullets={false}
                        showNavs={false}
                        autoPlay={true} 
                        autoPlayDelay = {5}
                    /></div>
                <div className={cl.star}></div>
                <div className={cl.center}>
                    <h1 className={cl.title}>САЛЬСА</h1>
                    <h2 className={cl.subtitle}>БРЕСТ</h2>
                    <LinkScroll to="form" smooth={true}>
                        <Button
                            size={ButtonSize.XL}
                            theme={ButtonTheme.OUTLINE}
                        >
                            Хочу танцевать
                        </Button>
                    </LinkScroll>
                </div>
                <div className={cl.right}>
                    <SimpleImageSlider
                        style={{}}
                        width={'100%'}
                        height={'100%'}
                        images={images2}
                        showBullets={false}
                        showNavs={false}
                        autoPlay={true} 
                        autoPlayDelay = {5}
                    />
                </div>
            </div>
        </div>
    );
};
