import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text } from 'shared/ui/Text/Text';
import cl from './Events.module.scss';

import snowMan from '../../../../public/img/newYear/snowman.webp';

interface EventsProps {
    className?: string;
    backgroundColor?: string;
}

export const Events = ({ className, backgroundColor }: EventsProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });

    return (
        <section
            style={{ background: backgroundColor }}
            id='events'
            className={classNames(cl.Events, {}, [className])}
            ref={triggerRef}
        >
            <img
                loading='lazy'
                src={snowMan}
                className={cl.snowMan}
                alt='snowMan'
            />
            
            <div className='container'>
                <div
                    className={classNames(
                        cl.superWrap,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    <Text title='Как выглядит сальса?' />
                    <div className={cl.wrap}>
                        <iframe
                            src='https://www.youtube.com/embed/u_9hLeLM7yI'
                            loading='lazy'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            loading='lazy'
                            src='https://www.youtube.com/embed/epWiSNsGPYc?si=ZwJ95tpv40txB2Uh'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            loading='lazy'
                            src='https://www.youtube.com/embed/zjO2AyC8wQ0?si=BFvX4-BOpr5Fyzhi'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            src='https://www.youtube.com/embed/b9w-RyB-oCM?si=WsH9XdEVPTXCQrRI'
                            loading='lazy'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            loading='lazy'
                            src='https://www.youtube.com/embed/Ic1BuTlEwFc?si=IHQZQ7xm33LvBUof'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            loading='lazy'
                            src='https://www.youtube.com/embed/Wud8Wq4huIs?si=NKAu3HAyBiTpFFX8'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
