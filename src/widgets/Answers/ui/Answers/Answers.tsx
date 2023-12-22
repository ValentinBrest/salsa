import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text } from 'shared/ui/Text/Text';

import { answers } from '../../../../../data/answers/answers';
import { answersTitle } from '../../../../../data/answers/answers';
import clave from '../../../../../public/img/instuments/clave.webp';
import blue from '../../../../../public/img/newYear/blue.png';
import { AnswerCard } from '../AnswerCard/AnswerCard';

import cl from './Answers.module.scss';

interface AnswersProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Answers = ({
    className,
    backgroundColor,
    isNewYear = false,
}: AnswersProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
        threshold: 0.05,
    });

    return (
        <section
            style={{ background: backgroundColor }}
            id='question'
            className={classNames(cl.Answers, {}, [className])}
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
                    {isNewYear ? (
                        <Text
                            hardTitle={[
                                'В',
                                <img
                                    loading='lazy'
                                    src={blue}
                                    className={'toy medium'}
                                    alt='o'
                                    key='1'
                                />,
                                'пр',
                                <img
                                    loading='lazy'
                                    src={blue}
                                    className={'toy medium'}
                                    alt='o'
                                    key='2'
                                />,
                                'сы',
                            ]}
                            className={cl.title}
                        />
                    ) : (
                        <Text title={answersTitle} className={cl.title} />
                    )}
                    <img
                        loading='lazy'
                        src={clave}
                        className={cl.clave}
                        alt='клавы'
                    />
                    {answers.map((item) => (
                        <AnswerCard
                            {...item}
                            key={item.id}
                            className={cl.AnswersCard}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
