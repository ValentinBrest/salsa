import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cl from './Photos.module.scss';

interface PhotosProps {
    className?: string;
    backgroundColor?: string ;
}

export const Photos = ({ className, backgroundColor }: PhotosProps) => {
    
    return (
        <div style={{background: backgroundColor}} id="Photos" className={classNames(cl.Photos, {}, [className])}>
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
