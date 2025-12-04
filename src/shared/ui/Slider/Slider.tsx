import { memo} from 'react';
import { useMediaQuery } from 'react-responsive';
import SimpleImageSlider from 'react-simple-image-slider';


interface SliderProps {
    images: string[] | Record<'url', string>[],
    mobileImages?: string[] | Record<'url', string>[],
    autoPlay? : boolean;
    showNavs?: boolean;
}

export const Slider = memo((props: SliderProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    const {
        images,
        mobileImages,
        autoPlay = true,
        showNavs = false,
    } = props;

    return (
        <SimpleImageSlider
            width={'100%'}
            height={'100%'}
            images={mobileImages && isMobileScreen ? mobileImages : images && !isMobileScreen ? images : ['']}
            showBullets={false}
            showNavs={showNavs}
            autoPlay={autoPlay}
            autoPlayDelay={5}
        />
    );
});
