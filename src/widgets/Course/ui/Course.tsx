import { useMediaQuery } from 'react-responsive';
import { Link as LinkScroll } from 'react-scroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { Accordion, Button, ButtonSize, ButtonTheme, Card } from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import { course } from '../../../../data/course';
import snowMan from '../../../../public/img/newYear/snowman.webp';

import cl from './Course.module.scss';

interface CourseProps {
    className?: string;
    backgroundColor?: string;
    backgroundColorCard?: string;
    isNewYear?: boolean;
}

export const Course = ({
    className,
    backgroundColor,
    backgroundColorCard,
    isNewYear = false,
}: CourseProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    const isTableScreen = useMediaQuery({ query: '(max-width: 992px)' });
    

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
                paddingBottom: isNewYear ? '120px' : '50px',
            }}
            id='events'
            className={classNames(cl.Course, {}, [className])}
        >
            {isNewYear && (
                <img
                    loading='lazy'
                    src={snowMan}
                    className={cl.snowMan}
                    alt='snowMan'
                />
            )}

            <div className='container'>
                <div
                    className={classNames(
                        cl.superWrap,
                        {},
                        []
                    )}
                >
                    <Text
                        animation={true}
                        theme={TextTheme.WITHOUT}
                        title={course.title}
                        className={cl.title}
                        back={() => {}}
                    />

                    <div className={cl.wrap}>
                        <iframe
                            src='https://www.youtube.com/embed/csdyrQAglPU'
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;height:100%;width:100%;object-fit:cover;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/csdyrQAglPU?autoplay=1><img src=https://img.youtube.com/vi/csdyrQAglPU/hqdefault.jpg alt='salsaBrest'><span>▶</span></a>"
                            title='Экспресс курс по сальсе "Включи ЛЕТО на максимум!"'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            referrerPolicy='strict-origin-when-cross-origin'
                            allowFullScreen
                            loading='lazy'
                        ></iframe>
                    

                        <Card className={cl.card}>
                            <Accordion
                                startHeight='300px'
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
                                to='form'
                                smooth={true}
                                className={cl.linkBtn}
                            >
                                <Button
                                    size={ButtonSize.L}
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
