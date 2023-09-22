import { useMediaQuery } from 'react-responsive';
import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import ph1 from '../../../../public/img/gallery/1.jpg';
import ph2 from '../../../../public/img/gallery/2.jpg';
import ph3 from '../../../../public/img/gallery/3.jpg';
import ph4 from '../../../../public/img/gallery/4.jpg';
import ph5 from '../../../../public/img/gallery/5.jpg';
import ph6 from '../../../../public/img/gallery/6.jpg';

import cl from './Photos.module.scss';

interface PhotosProps {
    className?: string;
    backgroundColor?: string;
}

export const Photos = ({ className, backgroundColor }: PhotosProps) => {
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });

    const images = [
        { url: ph3 },
        { url: ph6 },
        { url: ph2 },
        { url: ph4 },
        { url: ph5 },
        { url: ph1 },
    ];

    return (
        <div
            style={{ background: backgroundColor }}
            id="photos"
            className={classNames(cl.Photos, {}, [className])}
        >
            <div className="container">
                <Text title="Фотографии" />
                <Text
                    text="Фотографии с вечеринок, мероприятий, отдыха и жизни."
                    align={TextAlign.CENTER}
                />
                <div className={cl.wrap}>
                    <SimpleImageSlider
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                        width={'100%'}
                        height={'100%'}
                        images={images}
                        showBullets={!isTabletScreen}
                        showNavs={true}
                        navSize={isTabletScreen ? 30 : 50}
                        navMargin={isTabletScreen ? 15 : 30}
                    />
                </div>
            </div>
        </div>
    );
};
