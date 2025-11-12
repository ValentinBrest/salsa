import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { classNames } from 'shared/lib/classNames/classNames';
import { Template } from 'shared/ui';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import { photos } from '../../../../data/photos';
import Zoom from '../../../../public/icon/zoom.svg';
import ph1 from '../../../../public/img/gallery/1.webp';
import ph2 from '../../../../public/img/gallery/2.webp';
import ph3 from '../../../../public/img/gallery/3.webp';
import ph4 from '../../../../public/img/gallery/4.webp';
import ph5 from '../../../../public/img/gallery/5.webp';
import ph6 from '../../../../public/img/gallery/6.webp';
import ph7 from '../../../../public/img/main/1.webp';
import ph8 from '../../../../public/img/main/2.webp';
import ph9 from '../../../../public/img/main/3.webp';
import ph10 from '../../../../public/img/main/4.webp';
import ph11 from '../../../../public/img/main/5.webp';
import ph12 from '../../../../public/img/main/7.webp';
import toy from '../../../../public/img/newYear/green.png';

import { PhotosModal } from './PhotosModal';

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [curImg, setCurImg] = useState(1);

    const photosAll = [ph1, ph2, ph3, ph4, ph5, ph6, ph7, ph8, ph9, ph10, ph11, ph12];

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const onOpenModal = useCallback((e: React.SyntheticEvent<EventTarget>) => {
        // @ts-ignore
        setCurImg(e.target.dataset.order);
        setIsModalOpen(true);
    }, []);

    useEffect(() => {
        isModalOpen
            ? document.body.classList.add('lock')
            : document.body.classList.remove('lock');
    }, [isModalOpen]);

    const styles = isLaptopScreen ? { width: '100%' } : {};
    const O = <img src={toy} alt='o' className={'toy medium'} loading="lazy"/>;

    return (
        <>
            <Template
                backgroundColor={backgroundColor}
                className={cl.Photos}
                id={photos.id}
                classWrap={cl.wrap}
                amount={0.1}
            >
                {isNewYear ? (
                    <Text hardTitle={['Фот', O, 'галерея']} />
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
                                src={item}
                                className={cl.cart}
                                data-order={index + 1}
                                alt='фото'
                                loading="lazy"
                            />
                            <Zoom
                                className={cl.zoom}
                                data-order={index + 1}
                            />
                        </div>
                    ))}
                </div>
            </Template>

            <PhotosModal
                isOpen={isModalOpen}
                onClose={onCloseModal}
                index={curImg}
            />
        </>
    );
};
