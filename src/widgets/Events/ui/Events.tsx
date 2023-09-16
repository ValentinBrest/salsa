import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cl from './Events.module.scss';

interface EventsProps {
    className?: string;
    backgroundColor?: string ;
}

export const Events = ({ className, backgroundColor }: EventsProps) => {
    
    return (
        <div style={{background: backgroundColor}} id="events" className={classNames(cl.Events, {}, [className])}>
            <div className="container">
                <Text title="Мероприятия"/>
                <div className={cl.wrap}>
                    
                    <iframe src="https://www.youtube.com/embed/JjVC1PtXRxo"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                    />
                    <iframe src="https://www.youtube.com/embed/u_9hLeLM7yI"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                    />
                    <iframe src="https://www.youtube.com/embed/ziJ7plGga3g"
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
