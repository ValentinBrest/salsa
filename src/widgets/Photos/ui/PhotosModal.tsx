import { useMediaQuery } from 'react-responsive';
import SimpleImageSlider from 'react-simple-image-slider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui';

import ph1 from '../../../../public/img/gallery/1-max.webp';
import ph2 from '../../../../public/img/gallery/2.webp';
import ph3 from '../../../../public/img/gallery/3-max.webp';
import ph4 from '../../../../public/img/gallery/4-max.webp';
import ph5 from '../../../../public/img/gallery/5-max.webp';
import ph6 from '../../../../public/img/gallery/6-max.webp';
import ph7 from '../../../../public/img/gallery/7-max.webp';
import ph8 from '../../../../public/img/gallery/8.webp';
import ph9 from '../../../../public/img/gallery/9.webp';
import ph10 from '../../../../public/img/gallery/10.webp';
import ph11 from '../../../../public/img/gallery/11.webp';

import './PhotosModal.scss';

interface PhotosModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    index: number;
}

export const PhotosModal = (props: PhotosModalProps) => {
    const { className = '', isOpen, onClose, index } = props;
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });

    const images = [
        { url: ph1 },
        { url: ph2 },
        { url: ph3 },
        { url: ph4 },
        { url: ph5 },
        { url: ph6 },
        { url: ph7 },
        { url: ph8 },
        { url: ph9 },
        { url: ph10 },
        { url: ph11 },
    ];
    return (
        <Modal
            className={classNames('modalX', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
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
                startIndex={index-1}
                bgColor={'#ffffff00'}
            />
        </Modal>
    );
};
