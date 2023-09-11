import { useMediaQuery } from 'react-responsive';
import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import konstantin from '../../../../public/img/konstantin.jpg';
import valentin from '../../../../public/img/valentin.jpg';

import cl from './Photos.module.scss';

interface PhotosProps {
    className?: string;
    backgroundColor?: string ;
}

export const Photos = ({ className, backgroundColor }: PhotosProps) => {
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });

    const images = [
        { url: valentin },
        { url: konstantin },
        { url: valentin },
        { url: konstantin },
        { url: valentin },
        { url: konstantin },
    ];
    
    return (
        <div style={{background: backgroundColor}} id="photos" className={classNames(cl.Photos, {}, [className])}>
            <div className="container">
                <Text title="Фотографии"/>
                <Text text="Фотографии с вечеринок, мероприятий, отдыха и жизни." align={TextAlign.CENTER}/>
                <div className={cl.wrap}>
                    <SimpleImageSlider
                        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
                        width={'100%'}
                        height={'100%'}
                        images={images}
                        showBullets={!isTabletScreen}
                        showNavs={true}
                        navSize={isTabletScreen? 30: 50}
                        navMargin={isTabletScreen? 15: 30}
                        // autoPlay={true} 
                        // autoPlayDelay = {5}
                    />
                </div>
                
            </div>
        </div>
    );
};
