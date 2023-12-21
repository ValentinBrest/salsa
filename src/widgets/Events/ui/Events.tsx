import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text } from 'shared/ui/Text/Text';
import cl from './Events.module.scss';
import { events } from '../../../../data/events';
import snowMan from '../../../../public/img/newYear/snowman.webp';

interface EventsProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Events = ({
    className,
    backgroundColor,
    isNewYear = false,
}: EventsProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });

    return (
        <section
            style={{
                background: backgroundColor,
                paddingBottom: isNewYear ? '120px' : '50px',
            }}
            id='events'
            className={classNames(cl.Events, {}, [className])}
            ref={triggerRef}
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
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    <Text title={events.title} />
                    <div className={cl.wrap}>
                        <iframe
                            src='https://www.youtube.com/embed/u_9hLeLM7yI'
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/u_9hLeLM7yI?autoplay=1><img src=https://img.youtube.com/vi/u_9hLeLM7yI/hqdefault.jpg alt='Fabrizio & Tania'><span>▶</span></a>"
                            loading='lazy'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            loading='lazy'
                            src='https://www.youtube.com/embed/epWiSNsGPYc'
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/epWiSNsGPYc?autoplay=1><img src=https://img.youtube.com/vi/epWiSNsGPYc/hqdefault.jpg alt='Terry SalsAlianza & Amely'><span>▶</span></a>"
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            loading='lazy'
                            src='https://www.youtube.com/embed/zjO2AyC8wQ0'
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/zjO2AyC8wQ0?autoplay=1><img src=https://img.youtube.com/vi/zjO2AyC8wQ0/hqdefault.jpg alt='Rodrigo Cortazar & Alien Ramirez'><span>▶</span></a>"
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            src='https://www.youtube.com/embed/b9w-RyB-oCM'
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/b9w-RyB-oCM?autoplay=1><img src=https://img.youtube.com/vi/b9w-RyB-oCM/hqdefault.jpg alt='Fernando Sosa and Tropical Gem Shine'><span>▶</span></a>"
                            loading='lazy'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            loading='lazy'
                            src='https://www.youtube.com/embed/Ic1BuTlEwFc'
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Ic1BuTlEwFc?autoplay=1><img src=https://img.youtube.com/vi/Ic1BuTlEwFc/hqdefault.jpg alt='Adolfo Indacochea Mambo'><span>▶</span></a>"
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        <iframe
                            loading='lazy'
                            src='https://www.youtube.com/embed/Wud8Wq4huIs'
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Wud8Wq4huIs?autoplay=1><img src=https://img.youtube.com/vi/Wud8Wq4huIs/hqdefault.jpg alt='Adolfo Indacochea Mambo'><span>▶</span></a>"
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
