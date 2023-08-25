import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import cl from './Photos.module.scss';

interface PhotosProps {
    className?: string;
    backgroundColor?: string ;
}

export const Photos = ({ className, backgroundColor }: PhotosProps) => {

    const images = [
        { url: 'img/valentin.jpg' },
        { url: 'img/konstantin.jpg' },
        { url: 'img/valentin.jpg' },
        { url: 'img/konstantin.jpg' },
        { url: 'img/valentin.jpg' },
        { url: 'img/konstantin.jpg' },
    ];
    
    return (
        <div style={{background: backgroundColor}} id="photos" className={classNames(cl.Photos, {}, [className])}>
            <div className="container">
                <Text title="Фотографии"/>
                <Text text="Фотографии с вечеринок, мероприятий, отдыха и жизни." align={TextAlign.CENTER}/>
                <div className={cl.wrap}>
                    <SimpleImageSlider
                        width={896}
                        height={504}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        // autoPlay={true} 
                        // autoPlayDelay = {5}
                    />
                </div>
                
            </div>
        </div>
    );
};
