import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import konstantin from '../../../../public/img/konstantin.jpg';
import valentin from '../../../../public/img/valentin.jpg';

import cl from './Photos.module.scss';

interface PhotosProps {
    className?: string;
    backgroundColor?: string ;
}

export const Photos = ({ className, backgroundColor }: PhotosProps) => {

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
