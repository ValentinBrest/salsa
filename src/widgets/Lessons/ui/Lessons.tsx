import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Accordion } from 'shared/ui';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { lessons } from '../../../../data/lessons';
import guiro from '../../../../public/img/instuments/guiro.webp';

import cl from './Lessons.module.scss';

interface LessonsProps {
    className?: string;
    backgroundColor?: string;
}

export const Lessons = ({ className, backgroundColor }: LessonsProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
        threshold: 0.1,
    });

    return (
        <section
            style={{ background: backgroundColor }}
            id='lessons'
            className={classNames(cl.Lessons, {}, [className])}
            ref={triggerRef}
        >
            <div className='container'>
                <div
                    className={classNames(
                        cl.wrap,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    <div></div>
                    <div className={cl.decr}>
                        <Text title={lessons.title} />
                        <Accordion
                            height='1200px'
                            background={backgroundColor}
                            linkId='lessons'
                        >
                            {lessons.text.map((item, index) => (
                                <Text
                                    key={index}
                                    align={TextAlign.RIGHT}
                                    text={item}
                                />
                            ))}
                        </Accordion>
                    </div>
                    <img
                        loading='lazy'
                        src={guiro}
                        className={cl.guiro}
                        alt='guiro'
                    />
                </div>
            </div>
        </section>
    );
};
