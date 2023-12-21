import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Accordion } from 'shared/ui';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import tree from '../../../../public/img/newYear/tree.webp';
import { information } from '../../../../data/information';
import cl from './Information.module.scss';

interface InformationProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Information = ({
    className,
    backgroundColor,
    isNewYear = false,
}: InformationProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });

    return (
        <div
            style={{ background: backgroundColor }}
            id='info'
            className={classNames(cl.Information, {}, [className])}
            ref={triggerRef}
        >
            <div className='container'>
                <div
                    className={classNames(
                        cl.wrap,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    <Accordion
                        linkId='info'
                        height='1000px'
                        background={backgroundColor}
                    >
                        <div className={cl.decr}>
                            {isNewYear && (
                                <img
                                    loading='lazy'
                                    src={tree}
                                    className={cl.tree}
                                    alt='tree'
                                />
                            )}
                            <Text
                                className={cl.title}
                                title={information.title}
                            />

                            {information.text.map((item, intex) => (
                                <Text
                                    key={intex}
                                    className={cl.text}
                                    align={TextAlign.LEFT}
                                    text={item}
                                />
                            ))}
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
