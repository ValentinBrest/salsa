import { Link as LinkScroll } from 'react-scroll';
import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { useMediaQuery } from 'react-responsive';

import m1 from '../../../../public/img/main/11.jpg';
import m2 from '../../../../public/img/main/12.jpg';
import m3 from '../../../../public/img/main/13.jpg';
import m4 from '../../../../public/img/main/14.jpg';
import logo from '../../../../public/img/logo.png';

import cl from './IntroV2.module.scss';

interface IntroProps {
    className?: string;
    backgroundColor?: string;
}

export const IntroV2 = ({ className, backgroundColor }: IntroProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    const images = [{ url: m3 }, { url: m1 }];

    const images2 = [{ url: m2 }, { url: m4 }];

    const totalImg = [{ url: m3 }, { url: m4 }, { url: m1 }, { url: m2 }];
    return (
        <div
            style={{ background: backgroundColor }}
            className={classNames(cl.Intro, {}, [className])}
        >
            <div className={cl.slider}>
                {/* <div className={cl.start}><span>1, 2, 3 ...</span></div> */}
                {/* <div className={cl.finish}><span>... 5, 6, 7</span></div> */}
                <div className={cl.titleWrap}>
                    <h1 className={cl.title}>
                        <span>"СальсаБрест"</span>
                    </h1>
                    <h2 className={cl.subtitle}>
                        <span>
                            Мы создаем бренд. Вы будете гордиться тем, что
                            прошли нашу школу!
                        </span>
                    </h2>
                    <Button
                        size={ButtonSize.XL}
                        theme={ButtonTheme.OUTLINE}
                        className={cl.btn}
                    >
                        Записаться!
                    </Button>
                </div>
                <div className={cl.sliderBack} />
                <div className={cl.sliderWrap}>
                    <SimpleImageSlider
                        width={'100%'}
                        height={'100%'}
                        images={totalImg}
                        showBullets={false}
                        showNavs={false}
                        autoPlay={true}
                        autoPlayDelay={5}
                    />
                </div>
            </div>
            <div className={cl.imgWrap}>
                <img className={cl.logo} src={logo} alt='salsa-brest' />
            </div>
        </div>
    );
};
