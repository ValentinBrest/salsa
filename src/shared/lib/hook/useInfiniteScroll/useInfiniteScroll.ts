import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({callback, triggerRef}: UseInfiniteScrollOptions) {

    useEffect(() => {
        const triggerElement = triggerRef.current;

        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                threshold: 0.2,
            };
    
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    // console.log(entry)
                    callback();
                }
            }, options);
    
            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    },[callback, triggerRef]);
}