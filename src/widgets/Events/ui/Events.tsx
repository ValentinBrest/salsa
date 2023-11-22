import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import cl from './Events.module.scss';

interface EventsProps {
    className?: string;
    backgroundColor?: string ;
}

export const Events = ({ className, backgroundColor }: EventsProps) => {
    
    return (
        <div style={{background: backgroundColor}} id="events" className={classNames(cl.Events, {}, [className])}>
            <div className="container">
                <Text title="Как выглядит сальса?"/>
                <div className={cl.wrap}>
                    
                    <iframe src="https://www.youtube.com/embed/u_9hLeLM7yI"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                    />
                    <iframe src="https://www.youtube.com/embed/epWiSNsGPYc?si=ZwJ95tpv40txB2Uh"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                    />
                    <iframe src="https://www.youtube.com/embed/zjO2AyC8wQ0?si=BFvX4-BOpr5Fyzhi"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                    />
                    
                </div>
                
            </div>
        </div>
    );
};
