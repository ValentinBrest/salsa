import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Accordion, Card } from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import bongi from '../../../../public/img/instuments/bongi.webp';
import maria from '../../../../public/img/maria.webp';
import orange from '../../../../public/img/newYear/orange.png';
import cl from './WhySchool.module.scss';
import { whySchool } from '../../../../data/whySchool';

interface WhySchoolProps {
    className?: string;
    backgroundColor?: string;
    backgroundColorCard?: string;
    isNewYear?: boolean;
}

export const WhySchool = ({
    className,
    backgroundColor,
    backgroundColorCard,
    isNewYear = false,
}: WhySchoolProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });

    return (
        <section
            style={{ background: backgroundColor }}
            id='about'
            className={classNames(cl.WhySchool, {}, [className])}
            ref={triggerRef}
        >
            <div className='container'>
                <div
                    className={classNames(
                        cl.decr,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    {isNewYear ? (
                        <Text
                            className={cl.title}
                            theme={TextTheme.WITHOUT}
                            hardTitle={[
                                'Почему вам именн',
                                <img
                                    loading='lazy'
                                    alt='o'
                                    src={orange}
                                    key='1'
                                    className={'toy'}
                                />,
                                ' в школу «СальсаБрест',
                            ]}
                        />
                    ) : (
                        <Text
                            className={cl.title}
                            theme={TextTheme.WITHOUT}
                            title={whySchool.title}
                        />
                    )}

                    <Accordion
                        height='3500px'
                        background={backgroundColor}
                        linkId='about'
                    >
                        <div className={cl.wrap}>
                            <div>
                                {whySchool.text.map((item, index) => (
                                    <Text
                                        key={index}
                                        align={TextAlign.LEFT}
                                        className={cl.text}
                                        text={item}
                                    />
                                ))}
                            </div>
                            <img
                                loading='lazy'
                                src={bongi}
                                className={cl.bongi}
                                alt='бонги'
                            />
                        </div>

                        <Card
                            background={backgroundColorCard}
                            className={cl.card}
                        >
                            {whySchool.note}
                        </Card>

                        <div className={cl.invertedwrap}>
                            <img
                                loading='lazy'
                                src={maria}
                                alt='maria'
                                className={cl.maria}
                            />
                            <div>
                                <>
                                    <Text subTitle={whySchool.teacherTitle} />
                                    {whySchool.teacherText.map(
                                        (item, index) => (
                                            <Text
                                                key={index}
                                                align={TextAlign.CENTER}
                                                text={item}
                                            />
                                        )
                                    )}
                                </>
                            </div>
                        </div>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};
