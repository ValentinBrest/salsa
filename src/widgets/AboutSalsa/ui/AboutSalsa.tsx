import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text } from 'shared/ui/Text/Text';

import conga from '../../../../public/img/instuments/conga.webp';
import {aboutSalsa} from '../../../../data/aboutSalsa'
import cl from './AboutSalsa.module.scss';

interface AboutSalsaProps {
    className?: string;
    backgroundColor?: string;
}

export const AboutSalsa = ({ className, backgroundColor }: AboutSalsaProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });
    return (
        <section
            style={{ background: backgroundColor }}
            id='salsa'
            className={classNames(cl.AboutSalsa, {}, [className])}
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
                    <div className={cl.decr}>
                        <Text
                            text={aboutSalsa.text1}
                        />
                        <Text text={aboutSalsa.text2} />
                    </div>
                    <img
                        loading='lazy'
                        src={conga}
                        className={cl.conga}
                        alt='конги'
                    />
                </div>
            </div>
        </section>
    );
};
