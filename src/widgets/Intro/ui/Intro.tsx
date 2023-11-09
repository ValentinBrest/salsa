import { useMediaQuery } from 'react-responsive';
import { Link as LinkScroll } from 'react-scroll';
import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';

import logo from '../../../../public/img/logo.png';
import m1 from '../../../../public/img/main/1.jpg';
import m2 from '../../../../public/img/main/2.jpg';
import m3 from '../../../../public/img/main/3.jpg';
import m4 from '../../../../public/img/main/4.jpg';

import './Intro.scss';
import cl from './Intro.module.scss';

interface IntroProps {
    className?: string;
    backgroundColor?: string;
}

export const Intro = ({ className, backgroundColor }: IntroProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    const images = [{ url: m3 }, { url: m1 }];

    const images2 = [{ url: m2 }, { url: m4 }];

    const totalImg = [{ url: m2 }, { url: m1 }, { url: m3 }, { url: m4 }];
    return (
        <div
            style={{ background: backgroundColor }}
            className={classNames(cl.Intro, {}, [className])}
        >
            <div className={cl.wrap}>
                <div className={cl.left}>
                    <div className={cl.salsaLeft}>
                        <span>S</span>
                        <span>A</span>
                        <span>S</span>
                        <span>L</span>
                        <span>A</span>
                    </div>
                    <div className={classNames('slider', {[cl.opacity]: isMobileScreen}, [])} >
                        <SimpleImageSlider
                            width={'100%'}
                            height={'100%'}
                            images={isMobileScreen ? totalImg : images}
                            showBullets={false}
                            showNavs={false}
                            autoPlay={true}
                            autoPlayDelay={5}
                        />
                    </div>
                </div>
                <div className={cl.star}></div>
                <div className={cl.center}>
                    <h1 className={cl.title}>«СальсаБрест»</h1>
                    <h2 className={cl.subtitle}>
                        <span>МЫ СОЗДАЁМ БРЕНД.</span>
                        <span className={cl.cool}>
                            {' '}
                            Вы будете гордиться тем, что прошли нашу школу!
                        </span>
                    </h2>
                    <img
                        className={classNames(cl.logo, {}, [cl.anim])}
                        src={logo}
                        alt='salsa-brest'
                    />
                    <LinkScroll to='form' smooth={true}>
                        <Button
                            size={ButtonSize.XL}
                            theme={ButtonTheme.OUTLINE}
                            className={cl.btn}
                        >
                            Записаться!
                        </Button>
                    </LinkScroll>
                </div>
                {!isMobileScreen && (
                    <div className={cl.right}>
                        <div className={cl.salsaRight}>
                            <span>B</span>
                            <span>R</span>
                            <span>E</span>
                            <span>S</span>
                            <span>T</span>
                        </div>
                        <div className='slider'>
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
                )}
            </div>
        </div>
    );
};
