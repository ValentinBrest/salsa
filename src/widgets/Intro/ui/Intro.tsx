import { Link as LinkScroll } from 'react-scroll';
import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';

import m1 from '../../../../public/img/main/1-min.jpg';
import m2 from '../../../../public/img/main/2-min.jpg';
import m3 from '../../../../public/img/main/3-min.jpg';
import m4 from '../../../../public/img/main/4-min.jpg';

import cl from './Intro.module.scss';

interface IntroProps {
    className?: string;
    backgroundColor?: string;
}

export const Intro = ({ className, backgroundColor }: IntroProps) => {

    const images = [{ url: m4 }, { url: m1 }];

    const images2 = [{ url: m3 }, { url: m2 }];

    return (
        <div
            style={{ background: backgroundColor }}
            className={classNames(cl.Intro, {}, [className])}
        >
            <div className={cl.wrap}>
                <div className={cl.left}>
                    <SimpleImageSlider
                        width={'100%'}
                        height={'100%'}
                        images={images}
                        showBullets={false}
                        showNavs={false}
                        autoPlay={true}
                        autoPlayDelay={5}
                    />
                </div>
                <div className={cl.star}></div>
                <div className={cl.center}>
                    <h1 className={cl.title}>САЛЬСА</h1>
                    <h2 className={cl.subtitle}>БРЕСТ</h2>
                    <LinkScroll to='form' smooth={true}>
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
                        autoPlayDelay={5}
                    />
                </div>
            </div>
        </div>
    );
};
