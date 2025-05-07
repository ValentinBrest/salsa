import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { Accordion, Button, ButtonSize, ButtonTheme, Card } from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import poster from '../../../../public/img/poster.webp'
import video from '../../../../public/video/1.mp4'
import { course } from '../../../../data/course';

import cl from './Course.module.scss';
interface CourseProps {
    className?: string;
    backgroundColor?: string;
    backgroundColorCard?: string;
}

export const Course = ({
    className,
    backgroundColor,
    backgroundColorCard,
}: CourseProps) => {
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
            id='course'
            className={classNames(cl.Course, {}, [className])}
        >
    
            <div className='container'>
                <div className={classNames(cl.superWrap, {}, [])}>
                    <Text
                        animation={true}
                        theme={TextTheme.WITHOUT}
                        title={course.title}
                        className={cl.title}
                        back={() => navigate(-1)}
                    />

                    <div className={cl.wrap}>
                        <video
                            width='100%'
                            height='540'
                            preload='none'
                            controls
                            poster={poster}
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
                                    text={course.subTitle}
                                    className={cl.subTitle}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={course.descr}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={course.programm}
                                />
                                {course.programmItems.map((item, index) => (
                                    <Text
                                        key={index}
                                        align={TextAlign.LEFT}
                                        text={item}
                                    />
                                ))}
                                <Text
                                    align={TextAlign.LEFT}
                                    text={course.price}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={course.time}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={course.place}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={course.take}
                                />
                                {course.takeItems.map((item, index) => (
                                    <Text
                                        key={index}
                                        align={TextAlign.LEFT}
                                        text={item}
                                    />
                                ))}
                                <Text align={TextAlign.LEFT} text={course.ps} />
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
