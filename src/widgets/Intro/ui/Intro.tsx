import { useMediaQuery } from 'react-responsive';
import { Link as LinkScroll } from 'react-scroll';
import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';

import logo from '../../../../public/img/logo.webp';
import logoNewYear from '../../../../public/img/newYear/logo_new_year.webp';
import m1 from '../../../../public/img/main/1.webp';
import m2 from '../../../../public/img/main/2.webp';
import m3 from '../../../../public/img/main/3.webp';
import m4 from '../../../../public/img/main/4.webp';
import m5 from '../../../../public/img/main/5.webp';
import m6 from '../../../../public/img/main/6.webp';
import m7 from '../../../../public/img/main/7.webp';
import m8 from '../../../../public/img/main/8.webp';
import { intro } from '../../../../data/intro';
import './Intro.scss';
import cl from './Intro.module.scss';

interface IntroProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Intro = ({
    className,
    backgroundColor,
    isNewYear = false,
}: IntroProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const isLaptopScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const images = [{ url: m1 }, { url: m8 }, { url: m6 }, { url: m3 }];

    const images2 = [{ url: m2 }, { url: m5 }, { url: m7 }, { url: m4 }];

    const totalImg = [
        { url: m2 },
        { url: m1 },
        { url: m8 },
        { url: m6 },
        { url: m5 },
        { url: m7 },
        { url: m3 },
        { url: m4 },
    ];

    const getHeightLogo = () => {
        if (isMobileScreen) {
            return isNewYear ? '201px' : '150px';
        } else if (isTabletScreen) {
            return isNewYear ? '255px' : '190px';
        } else {
            return isNewYear ? '302px' : '225px';
        }
    };
    return (
        <section
            style={{ background: backgroundColor }}
            className={classNames(cl.Intro, {}, [className])}
        >
            <div className={cl.wrap}>
                <div className={cl.left}>
                    <div className={cl.salsaLeft}>
                        {intro.salsa.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                    <div
                        className={classNames(
                            'slider',
                            { [cl.opacity]: isLaptopScreen },
                            []
                        )}
                    >
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
                <div className={cl.center}>
                    <h1 className={cl.title}>{intro.title}</h1>
                    <h2 className={cl.subtitle}>
                        <span>{intro.school}</span>
                        <span className={cl.cool}>{intro.subtitle}</span>
                    </h2>
                    <img
                        loading='lazy'
                        className={classNames(cl.logo, {}, [cl.anim])}
                        style={{ height: getHeightLogo() }}
                        src={isNewYear ? logoNewYear : logo}
                        alt='salsa-brest'
                    />
                    <LinkScroll href='/' to='form' smooth={true}>
                        <Button
                            title={intro.singUp}
                            size={ButtonSize.XL}
                            theme={ButtonTheme.OUTLINE}
                            className={cl.btn}
                        >
                            {intro.singUp}
                        </Button>
                    </LinkScroll>
                </div>
                {!isMobileScreen && (
                    <div className={cl.right}>
                        <div className={cl.salsaRight}>
                            {intro.brest.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                        <div
                            className={classNames(
                                'slider',
                                { [cl.opacity]: isLaptopScreen },
                                []
                            )}
                        >
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
        </section>
    );
};
