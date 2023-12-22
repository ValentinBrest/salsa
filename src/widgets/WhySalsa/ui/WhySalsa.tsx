import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Accordion } from 'shared/ui';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import gold from '../../../../public/img/newYear/gold.png';
import saxophone from '../../../../public/img/instuments/saxophone.webp';
import partSnow from '../../../../public/img/newYear/partSnow.webp';
import { whySalsa } from '../../../../data/whySalsa';
import cl from './WhySalsa.module.scss';

interface WhySalsaProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const WhySalsa = ({
    className,
    backgroundColor,
    isNewYear = false,
}: WhySalsaProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });
    return (
        <section
            style={{ background: backgroundColor }}
            id='whySalsa'
            className={classNames(cl.WhySalsa, {}, [className])}
            ref={triggerRef}
        >
            {isNewYear && (
                <img
                    loading='lazy'
                    src={partSnow}
                    className={cl.partSnow}
                    alt='partSnow'
                />
            )}
            <div className='container'>
                <div
                    className={classNames(
                        cl.wrap,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    <div></div>
                    <img
                        loading='lazy'
                        src={saxophone}
                        className={cl.sax}
                        alt='саксофон'
                    />
                    <div className={cl.decr}>
                        {isNewYear ? (
                            <Text
                                hardTitle={[
                                    'П',
                                    <img
                                        loading='lazy'
                                        src={gold}
                                        alt='o'
                                        key='1'
                                        className={'toy small'}
                                    />,
                                    'чему сальса?',
                                ]}
                            />
                        ) : (
                            <Text title={whySalsa.title} />
                        )}
                        <Text
                            align={TextAlign.RIGHT}
                            className={cl.epigraph}
                            epigraph={whySalsa.epigraph.text}
                            author={whySalsa.epigraph.author}
                        />
                        <Accordion
                            height='800px'
                            background={backgroundColor}
                            linkId='whySalsa'
                        >
                            {whySalsa.text.map((item, index) => (
                                <Text
                                    key={index}
                                    align={TextAlign.RIGHT}
                                    text={item}
                                />
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};
