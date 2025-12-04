import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Accordion, Button, ButtonSize, ButtonTheme, Card } from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import { expressCourse } from '../../../../../data/expressCourse';
import { REGISTER } from '../../../../../data/links/constants';
import poster from '../../../../../public/img/poster.webp';

import cl from './InfoExpressCourse.module.scss';
interface InfoExpressCourseProps {
    className?: string;
    backgroundColor?: string;
    backgroundColorCard?: string;
}

export const InfoExpressCourse = ({
    className,
    backgroundColor,
    backgroundColorCard,
}: InfoExpressCourseProps) => {
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
            id={expressCourse.id}
            className={classNames(cl.InfoExpressCourse, {}, [className])}
        >
            <div className='container'>
                <div className={classNames(cl.superWrap, {}, [])}>
                    <Text
                        animation={true}
                        theme={TextTheme.WITHOUT}
                        title={expressCourse.title}
                        className={cl.title}
                        back={() => navigate('/')}
                    />
                    <Text text={expressCourse.date} className={cl.date} />

                    <div className={cl.wrap}>
                        <img
                            src={poster}
                            className={cl.poster}
                            alt='бонги'
                            loading='lazy'
                        />
                        {/* <video
                            width='100%'
                            height='540'
                            preload='none'
                            controls
                            poster={poster}
                            webkit-playsInline playsInline
                        >
                            <source src={video} type='video/mp4' />
                        </video> */}

                        <Card className={cl.card}>
                            <Accordion
                                startHeight='330px'
                                height={getHeightAccordion()}
                                background={backgroundColorCard}
                                linkId={expressCourse.id}
                            >
                                <Text
                                    text={expressCourse.subTitle}
                                    className={cl.subTitle}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={expressCourse.descr}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={expressCourse.programm}
                                />
                                {expressCourse.programmItems.map(
                                    (item, index) => (
                                        <Text
                                            key={index}
                                            align={TextAlign.LEFT}
                                            text={item}
                                        />
                                    ),
                                )}
                                <Text
                                    align={TextAlign.LEFT}
                                    text={expressCourse.price}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={expressCourse.time}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={expressCourse.place}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={expressCourse.take}
                                />
                                {expressCourse.takeItems.map((item, index) => (
                                    <Text
                                        key={index}
                                        align={TextAlign.LEFT}
                                        text={item}
                                    />
                                ))}
                                <Text
                                    align={TextAlign.LEFT}
                                    text={expressCourse.ps}
                                />
                            </Accordion>
                            <a href={`#${REGISTER}`} className={cl.linkBtn}>
                                <Button
                                    size={ButtonSize.ML}
                                    theme={ButtonTheme.OUTLINE}
                                    className={cl.btn}
                                >
                                    Участвовать
                                </Button>
                            </a>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
