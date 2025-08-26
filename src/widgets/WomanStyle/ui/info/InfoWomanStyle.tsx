import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { Accordion, Button, ButtonSize, ButtonTheme, Card } from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import { womanStyle } from '../../../../../data/womanStyle';
import poster from '../../../../public/img/poster.webp';
import video from '../../../../public/video/1.mp4';

import cl from './InfoWomanStyle.module.scss';
interface InfoWomanStyleProps {
    className?: string;
    backgroundColor?: string;
    backgroundColorCard?: string;
}

export const InfoWomanStyle = ({
    className,
    backgroundColor,
    backgroundColorCard,
}: InfoWomanStyleProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    const isTableScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const navigate = useNavigate();

    const getHeightAccordion = () => {
        if (isMobileScreen) {
            return '2500px';
        } else if (isTableScreen) {
            return '2200px';
        } else {
            return '1700px';
        }
    };

    return (
        <section
            style={{
                background: backgroundColor,
                paddingBottom: '50px',
            }}
            id='womanStyle'
            className={classNames(cl.InfoWomanStyle, {}, [className])}
        >
            <div className='container'>
                <div className={classNames(cl.superWrap, {}, [])}>
                    <Text
                        animation={true}
                        theme={TextTheme.WITHOUT}
                        title={womanStyle.title}
                        className={cl.title}
                        back={() => navigate('/')}
                    />
                    {/* <Text text={womanStyle.datePage} className={cl.date} /> */}

                    <div className={cl.wrap}>
                        <video
                            width='100%'
                            height='540'
                            preload='none'
                            controls
                            poster={poster}
                            webkit-playsInline
                            playsInline
                        >
                            <source src={video} type='video/mp4' />
                        </video>

                        <Card className={cl.card}>
                            <Accordion
                                startHeight='330px'
                                height={getHeightAccordion()}
                                background={backgroundColorCard}
                            >
                                <Text
                                    text={womanStyle.subTitle}
                                    className={cl.subTitle}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.descr}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.programm}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.trialSession}
                                />

                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.price}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.buySale}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.time}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.place}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.take}
                                />
                                {womanStyle.takeItems.map((item, index) => (
                                    <Text
                                        key={index}
                                        align={TextAlign.LEFT}
                                        text={item}
                                    />
                                ))}
                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.age}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={womanStyle.ps}
                                />
                            </Accordion>
                            <LinkScroll
                                href='/'
                                to='trialLesson'
                                smooth={true}
                                className={cl.linkBtn}
                            >
                                <Button
                                    size={ButtonSize.ML}
                                    theme={ButtonTheme.OUTLINE}
                                    className={cl.btn}
                                >
                                    Участвовать
                                </Button>
                            </LinkScroll>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
