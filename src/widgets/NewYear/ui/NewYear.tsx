import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import logo from '../../../../public/img/logo.webp';
import svitok from '../../../../public/img/newYear/svitok.png';
import venok from '../../../../public/img/newYear/venok.png';

import cl from './NewYear.module.scss';

interface NewYearProps {
    className?: string;
    backgroundColor?: string;
}

export const NewYear = ({ className, backgroundColor }: NewYearProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });
    return (
        <section
            style={{ background: backgroundColor }}
            id='salsa'
            className={classNames(cl.NewYear, {}, [className])}
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
                    <div className={cl.decr}>
                        <img
                            loading='lazy'
                            src={svitok}
                            className={cl.svitok}
                            alt='svitok'
                        />
                        <span>С новым годом!</span>
                        <span>С новым счастьем!</span>
                        <span>С новой сальсой!</span>
                    </div>
                    <div className={cl.wrapImg}>
                        <img
                            loading='lazy'
                            src={venok}
                            className={cl.venok}
                            alt='venok'
                        />
                        <img
                            loading='lazy'
                            src={logo}
                            className={cl.logo}
                            alt='logo'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
