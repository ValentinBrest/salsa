import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import ph1 from '../../../../public/img/gallery/1.jpg';
import ph2 from '../../../../public/img/gallery/2-min.jpg';
import ph3 from '../../../../public/img/gallery/3.jpg';
import ph4 from '../../../../public/img/gallery/4.jpg';
import ph5 from '../../../../public/img/gallery/5.jpg';
import ph6 from '../../../../public/img/gallery/6.jpg';
import ph7 from '../../../../public/img/gallery/7.jpg';
import Zoom from '../../../shared/assets/icons/zoom.svg';

import { PhotosModal } from './PhotosModal';

import cl from './Photos.module.scss';

interface PhotosProps {
    className?: string;
    backgroundColor?: string;
}

export const Photos = ({ className, backgroundColor }: PhotosProps) => {
    const isLaptopScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [curImg, setCurImg] = useState(1);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
        setIsMounted(false);
    }, []);

    const onOpenModal = useCallback((e) => {
        setCurImg(e.target.dataset.order);
        setIsAuthModal(true);
        setIsMounted(true);
    }, []);

    useEffect(() => {
        isAuthModal
            ? document.body.classList.add('lock')
            : document.body.classList.remove('lock');
    }, [isAuthModal]);

    const styles = isLaptopScreen ? {width: '100%'}: {}

    return (
        <div
            style={{ background: backgroundColor }}
            id='photos'
            className={classNames(cl.Photos, {}, [className])}
        >
            <div className='container' style={styles}>
                <Text title='Фотогалерея' />
                <Text
                    text='Фотографии с вечеринок, мероприятий и занятий.'
                    align={TextAlign.CENTER}
                />
                <div className={cl.wrap} onClick={(e) => onOpenModal(e)}>
                    <div className={classNames(cl.zoomWrap, {}, [cl.cart1])}>
                        <img src={ph1} data-order={1} />
                        <Zoom className={cl.zoom} />
                    </div>
                    <div className={classNames(cl.zoomWrap, {}, [cl.cart2])}>
                        <img src={ph2} data-order={2} />
                        <Zoom className={cl.zoom} />
                    </div>
                    <div className={classNames(cl.zoomWrap, {}, [cl.cart3])}>
                        <img src={ph3} data-order={3} />
                        <Zoom className={cl.zoom} />
                    </div>
                    <div className={classNames(cl.zoomWrap, {}, [cl.cart4])}>
                        <img src={ph4} data-order={4} />
                        <Zoom className={cl.zoom} />
                    </div>
                    <div className={classNames(cl.zoomWrap, {}, [cl.cart5])}>
                        <img className={cl.cart5} src={ph5} data-order={5} />

                        <Zoom className={cl.zoom} />
                    </div>
                    <div className={classNames(cl.zoomWrap, {}, [cl.cart6])}>
                        <img className={cl.cart6} src={ph6} data-order={6} />

                        <Zoom className={cl.zoom} />
                    </div>
                    <div className={classNames(cl.zoomWrap, {}, [cl.cart7])}>
                        <img className={cl.cart7} src={ph7} data-order={7} />

                        <Zoom className={cl.zoom} />
                    </div>
                </div>
                <PhotosModal
                    isMounted={isMounted}
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                    className={cl.modal}
                    index={curImg}
                />
            </div>
        </div>
    );
};
