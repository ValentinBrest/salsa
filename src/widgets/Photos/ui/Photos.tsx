import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import ph1 from '../../../../public/img/gallery/1.webp';
import ph2 from '../../../../public/img/gallery/2.webp';
import ph3 from '../../../../public/img/gallery/3.webp';
import ph4 from '../../../../public/img/gallery/4.webp';
import ph4mb from '../../../../public/img/gallery/4-mb.webp';
import ph5 from '../../../../public/img/gallery/5.webp';
import ph6 from '../../../../public/img/gallery/6.webp';
import ph7 from '../../../../public/img/gallery/7.webp';
import ph8 from '../../../../public/img/gallery/8.webp';
import ph9 from '../../../../public/img/gallery/9.webp';
import ph10 from '../../../../public/img/gallery/10.webp';
import ph11 from '../../../../public/img/gallery/11.webp';
import Zoom from '../../../shared/assets/icons/zoom.svg';
import green from '../../../../public/img/newYear/green.png';
import { PhotosModal } from './PhotosModal';
import { photos } from '../../../../data/photos';
import cl from './Photos.module.scss';

interface PhotosProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Photos = ({
    className,
    backgroundColor,
    isNewYear = false,
}: PhotosProps) => {
    const isLaptopScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const isTableScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [curImg, setCurImg] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const photosAll = isTableScreen
        ? [ph1, ph2, ph3, ph4mb, ph5, ph6, ph7, ph8, ph9, ph10, ph11]
        : [ph1, ph2, ph3, ph4, ph5, ph6, ph7, ph8, ph9, ph10, ph11];

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
        threshold: 0.001,
    });

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

    const styles = isLaptopScreen ? { width: '100%' } : {};

    return (
        <section
            style={{ background: backgroundColor }}
            id='photos'
            className={classNames(cl.Photos, {}, [className])}
            ref={triggerRef}
        >
            <div className='container' style={styles}>
                <div
                    className={classNames(
                        cl.wrap,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    {isNewYear ? (
                        <Text
                            hardTitle={[
                                'Фот',
                                <img
                                    loading='lazy'
                                    src={green}
                                    alt='o'
                                    key='2'
                                    className={'toy medium'}
                                />,
                                'галерея',
                            ]}
                        />
                    ) : (
                        <Text title={photos.title} />
                    )}
                    <Text text={photos.subtitle} align={TextAlign.CENTER} />
                    <div className={cl.gallery} onClick={(e) => onOpenModal(e)}>
                        {photosAll.map((item, index) => (
                            <div
                                key={index}
                                className={classNames(cl.zoomWrap, {}, [
                                    cl[`cart${index + 1}`],
                                ])}
                            >
                                <img
                                    loading='lazy'
                                    src={item}
                                    data-order={index + 1}
                                    alt='фото'
                                />
                                <Zoom className={cl.zoom} />
                            </div>
                        ))}
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
        </section>
    );
};
